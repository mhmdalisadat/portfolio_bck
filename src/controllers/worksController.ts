// src/controllers/landingController.ts
import { Request, Response } from "express";
import { WorksModel } from "../models";

export const getWorksData = (req: Request, res: Response) => {
  const worksData: WorksModel[] = [
    {
      title: "isatiscrowd",
      description: "IsatisCrowd.ir is a crowdfunding platform based in Iran, operated by Isatis Pooya Investment Group. It facilitates financial support for innovative projects and startups by connecting them with potential investors. The platform emphasizes transparency and efficiency in the fundraising process, aiming to foster economic development and entrepreneurial growth within the region.",
      link: "https://isatiscrowd.com",
      category: "Web Development",
    },
  ];
  res.status(200).json(worksData);
};
