import { Router } from "express";
import { getLandingData } from "../controllers";

const router = Router();

router.get("/landing", getLandingData);

export const landingRoutes = router;
