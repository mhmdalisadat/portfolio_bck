import { Router } from "express";
import { getBlogData } from "../controllers";

const router = Router();

router.get("/blog", getBlogData);

export const blogRoutes = router;
