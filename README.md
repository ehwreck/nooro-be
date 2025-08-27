# Express Backend Server

A backend **Express.js** server running on **Node.js** with **MySQL** as the database and **Prisma** as the ORM.  
This project uses **TypeScript** for type safety, **Yarn** as the package manager, and **Nodemon** for automatic reloads during development.

---

## 🚀 Features

- ⚡ **Express.js** — Fast and minimalist web framework for Node.js.
- 🛢 **MySQL** — Relational database for data storage.
- 🧩 **Prisma ORM** — Simplifies database access with auto-generated types.
- 🟦 **TypeScript** — Ensures type safety across the project.
- 🔄 **Nodemon** — Watches for changes and restarts the server automatically.
- 📦 **Yarn** — Modern, fast, and reliable package manager.

---

## 🛠️ Tech Stack

| Technology   | Purpose                     |
|-------------|-----------------------------|
| Node.js     | Runtime environment         |
| Express.js  | Web framework               |
| MySQL       | Relational database         |
| Prisma      | ORM for database operations |
| TypeScript  | Type-safe development      |
| Yarn        | Dependency management      |
| Nodemon     | Auto-reload for development |

---

## 📂 Project Structure

```
├── prisma/             # Prisma schema and migrations
├── src/                # Source code
│   ├── controllers/    # Route controllers
│   ├── routes/         # Express routes
│   ├── index.ts        # App entry point (TS)
├── dist/               # Compiled JS output
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/ehwreck/nooro-be.git
cd nooro-be
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and configure it. An example of all environment variables can be seen in .env.sample.
```env
PORT=3000
DATABASE_URL="mysql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"
```

### 4. Set up Prisma
Run the following commands to initialize and apply your Prisma migrations:
```bash
yarn prisma generate
yarn prisma migrate dev
```

---

## 🧩 Available Scripts

| Command           | Description                                         |
|-------------------|-----------------------------------------------------|
| `yarn dev`        | Runs TypeScript compiler in watch mode + Nodemon on `dist/index.js` |
| `yarn build`      | Compiles TypeScript into JavaScript in `/dist`      |
| `yarn start`      | Starts the compiled JavaScript server              |
| `yarn prisma`     | Run Prisma CLI commands                            |

---

## 🏃‍♂️ Running the Project

### Development Mode
```bash
yarn dev
```
By default, the server runs on **[http://localhost:3000](http://localhost:3000)**.

### Production Mode
```bash
yarn build
yarn start
```

---

## 🧪 Testing the API

Use an API client like **Postman**, **Insomnia**, or **cURL** to interact with the backend endpoints.  
Make sure your MySQL server is running and `.env` variables are configured correctly.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📧 Contact

For any questions, feedback, or issues, feel free to reach out:

**Your Name**  
📧 [erick_trivi1010@hotmail.com](mailto:erick_trivi1010@hotmail.com)  
🔗 [ehwreck](https://github.com/ehwreck)
