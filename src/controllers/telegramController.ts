import { Request, Response } from "express";
import TelegramBot from "node-telegram-bot-api";
import { SocksProxyAgent } from "socks-proxy-agent";
import {
  IContactRequest,
  IContactResponse,
} from "../interfaces/Contact.interface";
import { Contact } from "../models/contactModel";

const token = "7396199760:AAFVE3sxUtr0sHwvptYCBQ8_qPstElCcdz4";

// تنظیمات پراکسی SOCKS
const socksAgent = new SocksProxyAgent("socks5h://127.0.0.1:10808");

const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agent: socksAgent,
  } as any,
});

console.log("Telegram bot is starting with SOCKS proxy...");

// آی‌دی ادمین برای ارسال پیام‌ها
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID || "";

// دریافت اطلاعات فرم و ارسال به تلگرام
export const sendContactToTelegram = async (
  req: Request<{}, {}, IContactRequest>,
  res: Response<IContactResponse>
) => {
  const { email, phone, message } = req.body;

  try {
    const newContact = new Contact({
      email,
      phone,
      message,
    });
    await newContact.save();

    const text = `📥 درخواست همکاری جدید دریافت شد:
- ✉️ ایمیل: ${email}
- 📱 شماره تماس: ${phone}
- 📝 پیام: ${message}
- 🕒 زمان: ${new Date().toLocaleString("fa-IR")}`;

    await bot.sendMessage(ADMIN_CHAT_ID, text);

    res.status(200).json({
      success: true,
      message: "درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.",
      data: newContact.toObject(),
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message:
        "متأسفانه در ثبت درخواست شما مشکلی پیش آمده. لطفاً دوباره تلاش کنید.",
    });
  }
};

// پیام خوشامدگویی برای کاربران در تلگرام
bot.onText(/\/start/, (msg) => {
  console.log("Received /start command from:", msg.chat.id);
  bot
    .sendMessage(
      msg.chat.id,
      "سلام! از شما متشکریم که با ما تماس گرفتید. لطفاً پیام خود را ارسال کنید، به زودی با شما تماس خواهیم گرفت. 😊"
    )
    .then(() => {
      console.log("Welcome message sent successfully");
    })
    .catch((error) => {
      console.error("Error sending welcome message:", error);
    });
});

bot.on("error", (error) => {
  console.error("Telegram bot error:", error);
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});

// پاسخ خودکار به پیام‌های کاربران
bot.on("message", (msg) => {
  if (msg.text && !msg.text.startsWith("/")) {
    bot.sendMessage(
      msg.chat.id,
      "✅ اطلاعات شما ثبت شد! به زودی با شما تماس خواهیم گرفت. اگر سوالی دارید، همینجا مطرح کنید."
    );
  }
});
