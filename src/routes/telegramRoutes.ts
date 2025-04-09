import { Router } from "express";
import { sendContactToTelegram } from "../controllers/telegramController";
import { IContact } from "../models/contactModel";

const router = Router();

// تعریف interface برای request body
interface IContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// تعریف interface برای response
interface IContactResponse {
  success: boolean;
  message: string;
  data?: IContact;
}

router.post("/send-contact", sendContactToTelegram);

export const telegramRoutes = router;
