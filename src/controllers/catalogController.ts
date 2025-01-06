import { Request, Response } from "express";
import { CatalogModel } from "../models";

export const getCatalogData = (req: Request, res: Response) => {
  const catalogData: CatalogModel[] = [
    {
      title: "پیامرسان",
      picture: "https://via.placeholder.com/150",
      description:
        "سیستم دیجیتال مدیریت کافه و رستوران، شامل منوی آنلاین، باشگاه مشتریان، اتوماسیون سفارش، گارسون دیجیتال و فروشگاه آنلاین برای تجربه‌ای متفاوت و سریع.",
    },
  ];

  res.status(200).json(catalogData);
};
