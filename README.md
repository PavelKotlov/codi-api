# 🔗 Codi-API

### Say goodbye to boring memorization - Codi's flashcard-based platform makes learning to code a fun and seamless experience with progress tracking to keep you motivated.

[🔗 Live Version](https://codi-app.netlify.app/) | [Live API](codi-api-production.up.railway.app) |
[Codi Client Repo](https://github.com/PavelKotlov/codi-client)

[![made-with-node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-PostgreQSQL](https://img.shields.io/badge/Made%20with-PostgreSQL%20-blue)](https://PostgreSQL.com/)
[![made-with-Auth0](https://img.shields.io/badge/Made%20with-Auth0%20-critical)](https://Auth0.com/)
[![made-with-Axios](https://img.shields.io/badge/Made%20with-Axios%20-blue)](https://Axios.com/)
[![made-with-prisma](https://img.shields.io/badge/Made%20with-prisma%20-black)](https://prisma.com/)
[![made-with-OpenAI](https://img.shields.io/badge/Made%20with-OpenAi%20-red)](https://OpenAi.com/)
[![made-with-express](https://img.shields.io/badge/Made%20with-Express.js%20-black)](https://expressjs.com/)
[![made-with-Railway](https://img.shields.io/badge/Depolyed%20on-Railway%20-purple)](https://Railway.com/)

## Table of Content

- [🔗 Codi-API](#-codi-api)
  - [Say goodbye to boring memorization - Codi's flashcard-based platform makes learning to code a fun and seamless experience with progress tracking to keep you motivated.](#say-goodbye-to-boring-memorization---codis-flashcard-based-platform-makes-learning-to-code-a-fun-and-seamless-experience-with-progress-tracking-to-keep-you-motivated)
  - [Table of Content](#table-of-content)
  - [🌟 Features](#-features)
  - [🚀 Getting Started](#-getting-started)
  - [⚫ Endpoints](#-endpoints)
  - [🧱 Main Structure](#-main-structure)
  - [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
    - [🔙 Backend](#-backend)
    - [🧰 Development Dependencies](#-development-dependencies)
  - [🔨 contributors](#-contributors)
  - [⚠️ Disclaimer](#️-disclaimer)

## 🌟 Features

- Topic management: users can manage their topics through the topics endpoints.

- Flashcard management: users can manage flashcards for a specific topic through the cards endpoints.

- Flashcard quiz: the quiz endpoint provides a random set of flashcards for the user to answer in a quiz session.

- **Analytics**

  - Topic statistics: users can retrieve statistics for a specific topic, such as the total number of flashcards, the number of flashcards in each status, and the number of flashcard reviews grouped by date.

- **Security:**
  - The API requires authentication through Auth0 to access any of its endpoints.
  - Users can only access topics and flashcards they own.

---

## 🚀 Getting Started

1. Connect to your postgres server
2. Clone it <br>
   `git clone https://github.com/PavelKotlov/codi-api`
3. Navigate to the repo<br>
   `cd codi-api`
4. Install all the depndencies <br>
   `npm install`
5. Sign up with Auth0. Create an API follow the prompts and ensure to allow `Allow Offline` Access. [⚠️ Alternativly if you will connect a front end application also do the following:](#️-disclaimer) Add `http://localhost:[PORT]` link to Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins. Add `https://[app-name.us].auth0.com/authorize` to Application Login URI.
6. Create a .env file according to the template below

   ```sh
   DATABASE_URL=
   OPENAI_API_KEY=
   AUTH0_AUDIENCE=
   AUTH0_ISSUER_BASE_URL=
   ```

7. Create a databse for the project

   ```
   CREATE DATABASE codi;
   ```

8. Run migrations and seed the database

   ```sh
   npx prisma migrate reset
   ```

9. Run the server

   ```sh
   npm start
   ```

---

## ⚫ Endpoints

- Base URL : http://127.0.0.1:8080

| <b> Http method</b> | path                             | Description                                                                                           |
| ------------------- | -------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `GET`               | `/api/topics`                    | Gets all the topics for the authorized user                                                           |
| `POST`              | `/api/topics`                    | Creat a new topic for the authorized user                                                             |
| `GET`               | `/api/topics/:id`                | Gets a specific topic for the authorized user                                                         |
| `DELETE`            | `/api/topics/:id`                | Deletes a specific topic for the authorized user                                                      |
| `PATCH`             | `/api/topics/id`                 | Edits a specific topic for the authorized user                                                        |
| `GET`               | `/api/topics/:id/stats`          | Gets reviews per day, card counts, and graph informartion of a specific topic for the authorized user |
| `GET`               | `/api/topics/:id/cards/quiz`     | Gets the cards due for a quiz for a specific topic for the authorized user                            |
| `GET`               | `/api/topics/:id/cards`          | Gets all the cards for a specific topic for the authorized user                                       |
| `DELETE`            | `/api/topics/:id/cards/:card_id` | Deletes a card from a specific topic for the authorized user                                          |
| `GET`               | `/api/topics/:id/cards/:card_id` | Gets a specific card for a specific topic for the authorized user                                     |
| `POST`              | `/api/topics/:id/cards`          | Adds a card to a specific topic for the authorized user                                               |
| `PATCH`             | `/api/topics/:id/cards/:card_id` | Edits a card for a specific topic for the authorized user                                             |

## 🧱 Main Structure

```sh
├── db                     # functions that interact with the db to retrieve stats data
├── helpers                # helper functions
├── prisma                 # database
│  ├── migrations          # database migrations
│  ├── seeds               # database seeds
├─── routes                # app routes
├─── knexfile.js
├─── package-lock.json
├─── package.json
├─── README.md
└─── server.js            # the server: the main driver of the app includes all the routes and server configs

```

---

## 📦 Tech Stack (Dependencies)

### 🔙 Backend

- [Express](express.js)
- [prisma/client](https://www.npmjs.com/package/@prisma/client)
- [Body parser](https://www.npmjs.com/package/body-parser)
- [OpenAI](https://OpenAi.com/)
- [auth0](https://Auth0.com/)
- [express-oauth2-jwt-bearer]()
- [helmet](https://www.npmjs.com/package/helmet)
- [cors](https://www.npmjs.com/package/cors)

### 🧰 Development Dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Prisma](https://prisma.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Morgan](https://www.npmjs.com/package/morgan)

## 🔨 contributors

- PavelKotlov @PavelKotlov
- Juliana Mochizuki @jkmochizuki
- Shorouk Abdelaziz @ShoroukAziz

## ⚠️ Disclaimer

- This is a project for [LHL web development bootcamp](https://www.lighthouselabs.ca/) and is not meant for production use

<img src="https://camo.githubusercontent.com/7dd59506447a5060c5df4ab9da2c7a3fefcb0e1cd86ba40d31a45666bc98e6e0/687474703a2f2f466f7254686542616467652e636f6d2f696d616765732f6261646765732f6275696c742d776974682d6c6f76652e737667"/>

[⬆ Go to beginning](#Codi-API)
