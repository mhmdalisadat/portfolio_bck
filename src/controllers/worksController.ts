// src/controllers/landingController.ts
import { Request, Response } from "express";
import { WorksModel } from "../models";

export const getWorksData = (req: Request, res: Response) => {
  const worksData: WorksModel[] = [
    {
      title: "Mohammad Ali Sadat",
      picture: "https://via.placeholder.com/150",
      description: "FRONT-END DEVELOPER",
      link: "https://www.google.com",
      category: "Web Development",
    },
  ];
  res.status(200).json(worksData);
};
