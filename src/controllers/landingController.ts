// src/controllers/landingController.ts
import { Request, Response } from "express";

export const getLandingData = (req: Request, res: Response) => {
  const landingData = {
    heroTitle: "Mohammad Ali Sadat",
    email: "mohammadalisadat.20@gmail.com",
    mobile: "+989140707704",
    description: "FRONT-END DEVELOPER",
  };

  res.status(200).json(landingData);
};
