# Book-Store

[![Visit My Website](https://img.shields.io/badge/Visit-My%20Website-blue?style=for-the-badge&logo=internet-explorer)](https://anish-book-store.netlify.app/)

A simple MERN stack application for managing and viewing books. This project was created as a learning exercise in React and the MERN stack. It allows users to sign up, log in, and explore a selection of books, with administrative controls for managing book data.

## Features

- **User Authentication**: Users can sign up, log in, and access additional content once authenticated.
- **Home Page**: Displays a selection of free books accessible to all visitors.
- **Book Page**: Displays all available books, accessible only to logged-in users.
- **Admin Control**: Admin users can add and manage book data, including book name, image URL, price, category, and more.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Project Structure

- **Frontend**: Built with React, providing a responsive and dynamic user interface.
- **Backend**: Built with Node.js and Express.js, handling user authentication and book data management.
- **Database**: MongoDB, storing user and book data securely.

## Data Models

### User

| Field   | Type   | Description             |
|---------|--------|-------------------------|
| name    | String | The user's name          |
| email   | String | The user's email address |
| password| String | The user's password      |

### Book

| Field      | Type   | Description                |
|------------|--------|----------------------------|
| id         | Number | The id of the book        |
| name       | String | The name of the book        |
| title      | String | The title of the book        |
| imageUrl   | String | The URL of the book's image |
| price      | Number | The price of the book       |
| category   | String | The category of the book    |
| description| String  | The decription about book  |

## How It Works

1. **Home Page**: Visitors can view a list of free books without needing to sign up or log in.
2. **Sign Up / Log In**: Users can create an account or log in to access additional features.
3. **Book Page**: Once logged in, users can access the book page, which displays all available books.
4. **Admin Controls**: Only admins can add or modify book data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-store.git
   cd book-store
   ```
2. Install dependencies:
   - For the backend:
     ```bash
     cd Backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd Frontend
     npm install
     ```
3. Run the backend server:
   ```bash
   cd Backend
   npm start
   ```
4. Run the frontend development server:
   ```bash
   cd Frontend
   npm start
   ```

## Deployment

- The frontend is deployed on Netlify, and the backend is deployed on Render. MongoDB Atlas is used for database management.

## Future Enhancements

- Implement a purchasing system for users to buy books.
- Add features to allow users to read books online.
- Improve the UI/UX for a more seamless user experience.

### API Endpoints

### Login API
- **URL**: [https://book-store-krwj.onrender.com/user/login](https://book-store-krwj.onrender.com/user/login)
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
- **Description**: Registers a new user with their name, email, and password.

### Signup API
- **URL**: [https://book-store-krwj.onrender.com/user/signup](https://book-store-krwj.onrender.com/user/signup)
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "Your Name",
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Description**: Registers a new user with their name, email, and password.

### Books API
- **URL**: [https://book-store-krwj.onrender.com/book](https://book-store-krwj.onrender.com/book)
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "id": "1",
      "name": "Book Name",
      "title": "Book Title",
      "imageUrl": "https://example.com/image.jpg",
      "price": 19.99,
      "category": "Category",
      "description": "Description of the book"
    }
  ]
  ```
- **Description**: Retrieves a list of all books with their details.


## License

This project is licensed under the MIT License. See the [LICENSE] file for details.
