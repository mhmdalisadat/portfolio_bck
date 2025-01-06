// src/controllers/landingController.ts
import { Request, Response } from "express";
import { BlogModel } from "../models";

export const getBlogData = (req: Request, res: Response) => {
  const blogData: BlogModel[] = [
    {
      title: "Mohammad Ali Sadat",
      picture: "https://via.placeholder.com/150",
      description: "FRONT-END DEVELOPER",
    },
  ];
  res.status(200).json(blogData);
};
