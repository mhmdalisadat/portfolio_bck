import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import {
  blogRoutes,
  catalogRoutes,
  worksRoutes,
  telegramRoutes,
  landingRoutes,
} from "./routes";
import connectDB from "./config/database";

const app = express();
const port = process.env.PORT || 9060;
const serverUrl = process.env.SERVER_URL || "http://141.11.182.146:9060";

app.use(
  cors({
    origin: [
      "http://141.11.182.146:8080", // فرانت‌اند روی سرور
      "http://localhost:3000", // برای تست لوکال
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use((req: Request, res: Response, next) => {
  console.log(`[DEBUG] Incoming request:`);
  console.log(`- Method: ${req.method}`);
  console.log(`- URL: ${req.url}`);
  console.log(`- Path: ${req.path}`);
  console.log(`- Body:`, req.body);
  next();
});

app.use("/api", landingRoutes);
app.use("/api", catalogRoutes);
app.use("/api", blogRoutes);
app.use("/api", worksRoutes);
app.use("/api", telegramRoutes);

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from backend!" });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database setup completed");
    app.listen(port, () => {
      console.log(`🚀 Server is running on ${serverUrl}`);
    });
  } catch (err) {
    console.error("❌ Database setup failed:", err);
    process.exit(1);
  }
};

startServer();
