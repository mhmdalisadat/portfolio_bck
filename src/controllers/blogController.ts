// src/controllers/landingController.ts
import { Request, Response } from "express";
import { BlogModel } from "../models";

export const getBlogData = (req: Request, res: Response) => {
  const blogData: BlogModel[] = [
    {
      title: "Ali Sadat",
      description:
        "I'm a 23-year-old front-end developer from Yazd, Iran, with 4 years of experience crafting user-friendly and dynamic web interfaces.",
      techTitle: "Tech Stack",
      techDesc:
        "I work with a modern tech stack, including the latest tools and frameworks to build fast, dynamic, and scalable web applications.",
      location: " I'm open to working remotely.",
      email: "se.alisadat@gmail.com",
    },
  ];
  res.status(200).json(blogData);
};
