// src/controllers/landingController.ts
import { Request, Response } from "express";
import { WorksModel } from "../models";

export const getWorksData = (req: Request, res: Response) => {
  const worksData: WorksModel[] = [
    {
      title: "frontend developer",
      description: "Collaborated as a Front-End Developer in a stock trading company, focusing on building user-friendly and responsive web interfaces. Designed and implemented real-time dashboards, data visualization tools, and trading platforms to enhance the user experience. Leveraged modern technologies like React.js, TypeScript, and Tailwind CSS to deliver high-performance and scalable applications aligned with industry standards.",
      category: "Web Development",
      company: "Isatis Pooya Investment Group",
      startYear: "2023",
      endYear: "current",

    },
    {
      title: "Frelancer Frontend Developer",
      description:
        "Worked as a freelance Front-End Developer, creating modern, responsive, and user-focused web applications for a variety of clients. Specialized in building interactive interfaces, real-time features, and visually appealing designs using technologies like React.js, TypeScript, and Tailwind CSS. Delivered scalable and high-performance solutions tailored to client needs across diverse industries.",
      category: "Frontend Development",
      company: "Frelancer",
      startYear: "2021",
      endYear: "2023",
  
    },
    {
      title: "fullstack developer",
      description:
        "Worked as a Full-Stack Developer at Azad University, developing and maintaining web-based applications to support academic and administrative processes. Designed dynamic front-end interfaces with React.js and implemented robust back-end systems using Node.js and MongoDB. Contributed to creating scalable and efficient solutions to enhance user experience for students and staff.",
      category: "Full Stack Development",
      company: "Azad University",
      startYear: "2019",
      endYear: "2020",
    
    },
  ];
  res.status(200).json(worksData);
};
