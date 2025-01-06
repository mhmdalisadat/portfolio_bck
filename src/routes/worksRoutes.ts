import { Router } from "express";
import { getWorksData } from "../controllers";

const router = Router();

router.get("/works", getWorksData);

export const worksRoutes = router;
