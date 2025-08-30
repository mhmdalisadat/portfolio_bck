import { Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";
import { HttpsProxyAgent } from "https-proxy-agent";
import { Contact, IContact } from "../models/contactModel";

const token = process.env.TELEGRAM_BOT_TOKEN || "";
if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN is not set in environment variables");
}

const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || "";
if (!ADMIN_CHAT_ID) {
  throw new Error("ADMIN_CHAT_ID is not set in environment variables");
}

const proxyUrl = process.env.TELEGRAM_PROXY_URL;
let bot: TelegramBot;

if (proxyUrl) {
  // با پراکسی
  const agent = new HttpsProxyAgent(proxyUrl);
  bot = new TelegramBot(token, {
    polling: true,
    request: { agent } as any,
  });
} else {
  // بدون پراکسی
  bot = new TelegramBot(token, {
    polling: true,
  });
}

console.log(`Telegram bot is starting on ${process.env.SERVER_URL}`);
console.log(
  `Proxy configuration: ${proxyUrl ? `Using proxy: ${proxyUrl}` : "No proxy configured"}`
);

type ContactRequest = Request<
  {},
  {},
  { name: string; email: string; phone: string; message: string }
>;
type ContactResponse = Response<{
  success: boolean;
  message: string;
  data?: IContact;
}>;

export const sendContactToTelegram = async (
  req: ContactRequest,
  res: ContactResponse
) => {
  const { name, email, phone, message } = req.body;
  console.log("Received contact request:", { name, email, phone, message });

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    console.log("Contact saved to database:", newContact);

    const text = `📥 درخواست همکاری جدید:
- 👤 نام: ${name}
- ✉️ ایمیل: ${email}
- 📱 شماره تماس: ${phone}
- 📝 پیام: ${message}`;

    try {
      await bot.sendMessage(ADMIN_CHAT_ID, text);
      console.log("Message sent to Telegram successfully");
    } catch (telegramError) {
      console.error("Telegram sending failed:", telegramError);
    }

    res.status(200).json({
      success: true,
      message: "درخواست شما با موفقیت ثبت شد",
      data: newContact.toObject(),
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({
      success: false,
      message: "خطا در ثبت درخواست. لطفا دوباره تلاش کنید",
    });
  }
};

bot.onText(/\/start/, (msg) => {
  console.log("Received /start command from:", msg.chat.id);
  bot
    .sendMessage(
      msg.chat.id,
      "سلام! از شما متشکریم که با ما تماس گرفتید. لطفاً پیام خود را ارسال کنید، به زودی با شما تماس خواهیم گرفت. 😊"
    )
    .then(() => console.log("Welcome message sent successfully"))
    .catch((error) => console.error("Error sending welcome message:", error));
});

bot.on("error", (error) => {
  console.error("Telegram bot error:", error);
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});

bot.on("message", (msg) => {
  if (msg.text && !msg.text.startsWith("/")) {
    bot.sendMessage(
      msg.chat.id,
      "✅ اطلاعات شما ثبت شد! به زودی با شما تماس خواهیم گرفت. اگر سوالی دارید، همینجا مطرح کنید."
    );
  }
});
