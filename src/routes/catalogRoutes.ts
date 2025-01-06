import { Router } from "express";
import { getCatalogData } from "../controllers"; 

const router = Router();

router.get("/catalog", getCatalogData);

export const catalogRoutes = router;
