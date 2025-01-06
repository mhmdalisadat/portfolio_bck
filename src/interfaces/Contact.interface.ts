export interface IContactRequest {
  email: string;
  phone: string;
  message: string;
}

export interface IContactResponse {
  success: boolean;
  message: string;
  data?: {
    _id: any;
    email: string;
    phone: string;
    message: string;
    createdAt: Date;
  };
}

// برای استفاده در کوئری‌های مختلف
export interface IContactQuery {
  email?: string;
  phone?: string;
  createdAt?: {
    $gte?: Date;
    $lte?: Date;
  };
}
