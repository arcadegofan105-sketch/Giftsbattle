# 🎁 Giftsbattle - Платформа для открытия кейсов

> **⚠️ Важно:** Этот проект создан для обучения и вдохновлён функционалом giftsbattle.com, но с уникальным дизайном и реализацией.

## 📋 Описание

Giftsbattle - это full-stack веб-приложение для открытия виртуальных кейсов с NFT и игровыми предметами. Платформа включает систему апгрейдов, крафтов, конкурсов и реферальную программу.

## ✨ Основные возможности

- 🎲 **Открытие кейсов** - различные категории кейсов с разными ценами и наградами
- ⬆️ **Система апгрейдов** - улучшение предметов с множителями x2-x50
- 🔨 **Крафты** - создание новых предметов из имеющихся
- 🏆 **Конкурсы** - регулярные активности с призами
- 👥 **Реферальная программа** - приглашение друзей с бонусами
- 🔐 **Авторизация через Telegram** - быстрая и безопасная аутентификация
- 💎 **NFT поддержка** - работа с Telegram Gifts

## 🛠 Технологический стек

### Frontend
- **Next.js 14** - React фреймворк
- **TypeScript** - статическая типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **Socket.io-client** - real-time обновления

### Backend
- **Node.js** + **Express.js** - серверная логика
- **TypeScript** - типизация
- **PostgreSQL** - база данных
- **Prisma ORM** - работа с БД
- **Redis** - кэширование
- **Socket.io** - WebSocket

### Telegram
- **Telegram Bot API** - интеграция с ботом
- **Telegram Login Widget** - авторизация
- **Telegram Mini Apps** - встроенное приложение

## 📁 Структура проекта

```
giftsbattle/
├── backend/           # Backend API
│   ├── src/
│   │   ├── routes/    # API endpoints
│   │   ├── services/  # Бизнес-логика
│   │   ├── database/  # Prisma схемы
│   │   └── telegram/  # Telegram бот
│   └── package.json
│
├── frontend/          # Next.js приложение
│   ├── src/
│   │   ├── app/       # Next.js страницы
│   │   ├── components/ # React компоненты
│   │   ├── lib/       # Утилиты
│   │   └── styles/    # Стили
│   └── package.json
│
└── shared/            # Общие типы
    └── types/
```

## 🚀 Быстрый старт

### Предварительные требования

- Node.js >= 18.x
- PostgreSQL >= 14.x
- Redis (опционально)
- Telegram Bot Token

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/arcadegofan105-sketch/Giftsbattle.git
cd Giftsbattle
```

2. Установите зависимости для backend:
```bash
cd backend
npm install
```

3. Установите зависимости для frontend:
```bash
cd frontend
npm install
```

4. Настройте переменные окружения:
```bash
# backend/.env
DATABASE_URL="postgresql://user:password@localhost:5432/giftsbattle"
TELEGRAM_BOT_TOKEN="ваш_токен_бота"
JWT_SECRET="ваш_секретный_ключ"
REDIS_URL="redis://localhost:6379"
PORT=3001

# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=ваш_бот
```

5. Примените миграции базы данных:
```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

6. Запустите backend:
```bash
cd backend
npm run dev
```

7. Запустите frontend:
```bash
cd frontend
npm run dev
```

8. Откройте браузер: `http://localhost:3000`

## 📝 Документация API

### Authentication
```
POST /api/auth/telegram - Авторизация через Telegram
```

### Cases
```
GET  /api/cases - Список всех кейсов
GET  /api/cases/:id - Детали кейса
POST /api/cases/:id/open - Открыть кейс
```

### Upgrades
```
POST /api/upgrades - Создать апгрейд
GET  /api/upgrades/history - История апгрейдов
```

### Crafts
```
POST /api/crafts - Создать крафт
GET  /api/crafts/recipes - Доступные рецепты
```

### User
```
GET /api/user/profile - Профиль пользователя
GET /api/user/inventory - Инвентарь
GET /api/user/balance - Баланс
```

## 🗄 Схема базы данных

```prisma
model User {
  id            String   @id @default(uuid())
  telegramId    String   @unique
  username      String?
  balance       Int      @default(0)
  tickets       Int      @default(0)
  inventory     Item[]
  caseOpenings  CaseOpening[]
}

model Case {
  id          String   @id @default(uuid())
  name        String
  price       Int
  category    String
  items       CaseItem[]
}

model Item {
  id        String   @id @default(uuid())
  name      String
  rarity    String
  value     Int
  isNFT     Boolean  @default(false)
}
```

## 🎨 Дизайн и UI/UX

- Тёмная тема (dark mode)
- Анимации при открытии кейсов
- Адаптивный дизайн (мобильная версия)
- Telegram Mini App интерфейс
- Звуковые эффекты

## 📦 Деплой

### Backend (Railway)
```bash
railway login
railway init
railway up
```

### Frontend (Vercel)
```bash
vercel
vercel --prod
```

### Database (Railway PostgreSQL)
```bash
railway add postgresql
```

## 🤝 Вклад в проект

1. Fork репозиторий
2. Создайте ветку (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE)

## 👤 Автор

**arcadegofan105-sketch**
- GitHub: [@arcadegofan105-sketch](https://github.com/arcadegofan105-sketch)

## 🙏 Благодарности

- Вдохновлено платформой giftsbattle.com
- Telegram Bot API
- Next.js и React community

## 📞 Поддержка

Если возникли вопросы:
- Создайте Issue в GitHub
- Telegram: @ваш_телеграм

---

⭐ Если проект понравился, поставьте звезду!
