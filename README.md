# Portfolio Backend

بک‌اند پورتفولیو با Node.js، Express و MongoDB

## 🚀 اجرا

```bash
# اجرای کامل
docker-compose up --build -d

# مشاهده لاگ‌ها
docker-compose logs -f backend

# متوقف کردن
docker-compose down
```

## 📁 ساختار

```
src/
├── app.ts              # فایل اصلی
├── config/             # تنظیمات
├── controllers/        # کنترلرها
├── models/            # مدل‌ها
├── routes/            # مسیرها
└── interfaces/        # رابط‌ها
```

## 🔧 تنظیمات

قبل از اجرا، `ADMIN_CHAT_ID` را در `docker-compose.yml` تنظیم کنید.

## 🐛 عیب‌یابی

```bash
# لاگ‌های backend
docker-compose logs backend

# ورود به کانتینر
docker exec -it portfolio-backend sh
```
