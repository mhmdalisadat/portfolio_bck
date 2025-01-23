import { Router } from "express";
import { handleContactRequest } from "../controllers/contactController";

const router = Router();

router.post("/contact", handleContactRequest);

export const contactRoutes = router;
