import { Router } from "express";
import { sendContactToTelegram } from "../controllers/telegramController";

const router = Router();

router.post("/send-contact", sendContactToTelegram);

export const telegramRoutes = router;
