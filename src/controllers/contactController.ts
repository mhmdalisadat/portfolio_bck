import { Request, Response } from "express";
import { Contact } from "../models/contactModel"; // مدل تماس
import { sendContactToTelegram } from "./telegramController"; // تابع ارسال پیام به تلگرام

// تابع برای دریافت درخواست تماس
export const handleContactRequest = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    // ذخیره اطلاعات تماس در دیتابیس
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // ارسال پیام به تلگرام
    const text = `📥 درخواست جدید:
- 👤 نام: ${name}
- ✉️ ایمیل: ${email}
- 📱 شماره تماس: ${phone}
- 📝 پیام: ${message}`;

    await sendContactToTelegram(req, res);

    res.status(200).json({
      success: true,
      message: "درخواست شما با موفقیت ثبت شد.",
      data: newContact,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "متأسفانه در ثبت درخواست شما مشکلی پیش آمده.",
    });
  }
};
