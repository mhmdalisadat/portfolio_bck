# مرحله Build
FROM node:20-alpine AS builder

# ست کردن دایرکتوری کاری
WORKDIR /app

# کپی فایل‌های پکیج
COPY package*.json tsconfig.json ./

# نصب وابستگی‌ها
RUN npm install

# کپی کل پروژه
COPY . .

# بیلد پروژه
RUN npm run build

# مرحله Production
FROM node:20-alpine AS production

WORKDIR /app

# فقط فایل‌های لازم برای اجرا
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# نصب فقط dependencyهای لازم برای اجرا
RUN npm install --omit=dev

# اگر از dotenv استفاده می‌کنی، این خط رو هم اضافه کن
# COPY --from=builder /app/.env ./

# پورت برنامه (طبق اطلاعات قبلی 9060)
EXPOSE 9060

# اجرای برنامه
CMD ["node", "dist/app.js"]
