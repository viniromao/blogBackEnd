# Java Blog Project

This is a blog project developed using Java, Spring Boot, React, Docker, and MySQL as the database. The project allows users to write, view, and interact with blog posts. Here's an overview of the components and features:

## Components

### Java Spring Boot Backend

The Java Spring Boot backend is responsible for handling the core functionality of the blog project.

### React Frontend

The React frontend provides a user-friendly interface for creating and interacting with blog posts.

### MySQL Database

The MySQL database is used to store and manage blog posts, user data, and other related information.

### Docker

Docker is used for containerization, making it easy to deploy and manage the application.

## Usage

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

2. Build and run the Docker containers using the provided Docker Compose file (`docker-compose.yml`). Make sure you have Docker installed.

   ```bash
   docker-compose up -d
   ```

3. Build and run the Backend using the "BlogApplication" file.

4. cd to "/Blog/src/webapp/blog" and run:

   ```bash
   npm install
   ```

   ```bash
   npm start 
   ```


6. Access the project through the web interface.

7. You can create an account, write and interact with blog posts, and explore the features of the project.

## API Endpoints

The project includes several API endpoints for different functionalities:

- `/user/register`: Register a new user.
- `/internal/post`: Manage blog posts, including creating, updating, and deleting posts.
- `/auth`: Authenticate users and generate tokens for authorization.
- `/perfil`: Manage user profiles.

Please refer to the code and the specific controllers for more details on the API endpoints and their functionality.

## Configuration

The project uses the following configuration:

- MySQL database with password 'root' and a 'blog' database.
- React frontend for the user interface.
- Spring Boot for the backend application.

## Requirements

- Docker
- Docker Compose
- React
- Java
- Node.js and npm

Contributions to this project are welcome. Feel free to submit issues or pull requests if you'd like to improve or extend the functionality of this blog project.

Enjoy using this project for writing and sharing your thoughts!
