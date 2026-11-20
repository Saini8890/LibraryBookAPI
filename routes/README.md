
# Library Book Management API

A RESTful API developed using Node.js, Express.js and MongoDB (Mongoose) to manage library books.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Thunder Client

## Features
- Add a new book
- Get all books
- Get a single book by ID
- Update book details
- Delete a book
- Input validation and error handling
- Request logging middleware

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /books | Add a book |
| GET | /books | Get all books |
| GET | /books/:id | Get one book |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |

## Installation

1. Clone this repository.
2. Run `npm install`.
3. Create a `.env` file in the root directory.
4. Add your MongoDB connection string:

`MONGO_URI=your_mongodb_connection_string`

5. Start the server:

`node server.js`

Server runs at http://localhost:3000

## Output Screenshots

All API testing and MongoDB Compass screenshots are available in the `screenshots` folder.
