import express, { Request, Response } from "express";
import cors from "cors";
import { landingRoutes } from "./routes/landingRoutes";
import { blogRoutes, catalogRoutes, worksRoutes } from "./routes";
import { telegramRoutes } from "./routes/telgramRoutes";

const app = express();
const port = process.env.PORT || 3004;

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);
app.use(express.json());

app.use((req: Request, res: Response, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api", landingRoutes);
app.use("/api", catalogRoutes);
app.use("/api", blogRoutes);
app.use("/api", worksRoutes);
app.use("/api", telegramRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
