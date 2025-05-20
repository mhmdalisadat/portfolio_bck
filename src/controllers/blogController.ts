// src/controllers/landingController.ts
import { Request, Response } from "express";
import { BlogModel } from "../models";

export const getBlogData = (req: Request, res: Response) => {
  const blogData: BlogModel[] = [
    {
      title: "Ali Sadat",
      description:
        "I'm a passionate software engineer with 4 years of experience, specializing in TypeScript and modern web development. Based in  Iran, I've dedicated my career to crafting elegant, efficient, and scalable solutions that make a real impact. My journey in software engineering is driven by a deep love for clean code and innovative problem-solving.",
      techTitle: "Tech Stack & Expertise",
      techDesc:
        "As a TypeScript enthusiast, I leverage its powerful type system and modern features to build robust applications. My tech stack includes React, Node.js, and various modern frameworks. I'm constantly exploring new technologies and best practices to stay at the forefront of software development. I'm particularly passionate about building performant, maintainable, and user-friendly applications that solve real-world problems.",
      location:
        "I'm flexible with work arrangements - whether it's remote, in-office, or contract positions. I'm open to opportunities worldwide and can adapt to different time zones and work cultures. My goal is to contribute to meaningful projects and grow alongside innovative teams.",
      email: "se.alisadat@gmail.com",
      phone: "+989140707704",
      passion:
        "My passion for software engineering goes beyond just writing code. I'm fascinated by how technology can transform lives and businesses. Every day, I immerse myself in the latest tech trends, contribute to open-source projects, and share knowledge with the developer community. I believe in creating software that not only solves problems but also brings joy to users and makes their lives easier. This drive to innovate and improve keeps me excited about every new project and challenge that comes my way.",
    },
  ];
  res.status(200).json(blogData);
};
