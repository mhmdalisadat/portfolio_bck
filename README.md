# Portfolio API

![Portfolio API](https://example.com/portfolio-api-banner.png)

Welcome to the **Portfolio API** backend repository. This backend is built using **Express** and **TypeScript**, with **MongoDB** for data storage. It powers a dynamic portfolio website, featuring an integrated "Contact Me" section connected to a **Telegram Bot**.

## Features

- **Express.js**: Lightweight and efficient web framework for building RESTful APIs.
- **TypeScript**: Provides type safety and improved developer experience.
- **MongoDB**: Flexible and scalable NoSQL database.
- **Contact Me Telegram Bot**: Directly sends user messages to your Telegram account.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (Local or Cloud)
- **Telegram Bot Token**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio_api.git
   cd portfolio_api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   TELEGRAM_CHAT_ID=your-telegram-chat-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The API will be accessible at `http://localhost:5000`.

### Scripts

- `npm run dev`: Start the server in development mode.
- `npm run build`: Compile TypeScript into JavaScript.
- `npm start`: Run the compiled JavaScript code.

## API Endpoints

### 1. **Contact Me Endpoint**

#### POST `/contact`
Send a message to the Telegram bot.

**Request Body:**
```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Your message here."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### 2. **Portfolio Content Management**

#### GET `/projects`
Retrieve a list of projects.

#### POST `/projects`
Add a new project (admin-only).

#### PUT `/projects/:id`
Update an existing project (admin-only).

#### DELETE `/projects/:id`
Delete a project (admin-only).

## Folder Structure

```plaintext
portfolio_api/
├── src/
│   ├── controllers/    # Route handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── services/       # Business logic and utilities
│   ├── types/          # Custom TypeScript definitions
│   ├── app.ts          # App initialization
│   └── index.ts        # Entry point
├── .env                # Environment variables
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

## Graphical Overview

### Architecture

```plaintext
Browser/Frontend ↔ Express API ↔ MongoDB
                          ↕
               Telegram Bot Integration
```

### Contact Me Workflow

1. User submits the contact form on the portfolio website.
2. The form sends a POST request to the `/contact` endpoint.
3. The backend validates the input and forwards the message to the Telegram Bot.
4. The message appears in your Telegram chat.

![Workflow Diagram](https://example.com/workflow-diagram.png)

## Technologies Used

- **Backend Framework**: Express.js
- **Programming Language**: TypeScript
- **Database**: MongoDB
- **Messaging**: Telegram Bot API

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: your.email@example.com
- **Telegram**: [@yourtelegram](https://t.me/yourtelegram)
- **GitHub**: [yourusername](https://github.com/yourusername)

