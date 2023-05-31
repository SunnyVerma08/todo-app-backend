# Todo App Backend

**Table of Contents**

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Users Endpoints](#users-endpoints)
  - [Todo Endpoints](#todo-endpoints)
- [Testing](#testing)
  - [Prerequisites](#prerequisites)
  - [Importing the Collection](#importing-the-collection)
  - [Running the Requests](#running-the-requests)
- [Contributing](#contributing)

## Description

The Todo App Backend is a professional-grade RESTful API that provides robust functionality for managing todos and user authentication. The API allows users to register, log in, create, update, view, and delete todos. Users can also update their account details and password.

## Technologies Used

This project leverages cutting-edge technologies to deliver a secure and efficient backend solution:

- Node.js 🚀: A scalable JavaScript runtime environment used for server-side development.
- Express.js ✨: A robust and flexible web application framework for Node.js used for building the RESTful API.
- MongoDB 🍃: A powerful NoSQL database used for storing todo and user data, providing high performance and scalability.
- Mongoose 🍃: An elegant Object Data Modeling (ODM) library for MongoDB and Node.js used for efficient database operations and schema management.
- JWT (JSON Web Tokens) 🔐: A widely adopted standard for securely transmitting information between parties as JSON objects. Used for user authentication and authorization, ensuring secure and stateless communication.
- Bcrypt 🔒: A battle-tested library used for hashing and salting user passwords, ensuring the highest level of password security.
- Postman 📮: A professional collaboration platform for API development and testing. The provided Postman collection file (`todo-app-backend.postman_collection.json`) contains meticulously designed and pre-configured requests for comprehensive API testing and validation.

## Installation

To set up the Todo App Backend on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/SunnyVerma08/todo-app-backend.git`
2. Install the dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the project root directory.
   - Add the following environment variables to the `.env` file:
     - `MONGODB_URI`: The URI for connecting to your MongoDB database.
     - `JWT_SECRET`: A secret key used for JWT token generation and verification.
   - Save the `.env` file.
4. Start the server: `npm start`

## API Endpoints

The Todo App Backend offers a comprehensive set of API endpoints to facilitate seamless integration and interaction. Below is a detailed description of each endpoint:

### Users Endpoints

| Endpoint        | Method | URL                              | Description                                                                                                           |
| --------------- | ------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Register User   | POST   | {{URL}}/api/users/register       | Registers a new user by sending a POST request to the specified URL with the user's details in the request body.      |
| Login           | POST   | {{URL}}/api/users/login          | Logs in a user by sending a POST request to the specified URL with the user's credentials in the request body.        |
| Logout          | GET    | {{URL}}/api/users/logout         | Logs out the currently logged-in user by sending a GET request to the specified URL.                                  |
| Me              | GET    | {{URL}}/api/users/me             | Retrieves the details of the currently logged-in user by sending a GET request to the specified URL.                  |
| Update Password | PUT    | {{URL}}/api/users/updatepassword | Updates the password of the currently logged-in user by sending a PUT request to the specified URL.                   |
| Update Details  | PUT    | {{URL}}/api/users/updatedetails  | Updates the details (name, email, age) of the currently logged-in user by sending a PUT request to the specified URL. |
| Delete User     | DELETE | {{URL}}/api/users/delete         | Deletes the currently logged-in user by sending a DELETE request to the specified URL.                                |

### Todo Endpoints

| Endpoint      | Method | URL                               | Description                                                                                                    |
| ------------- | ------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Create Todo   | POST   | {{URL}}/api/todos/create          | Creates a new todo by sending a POST request to the specified URL with the todo's details in the request body. |
| View Todo     | GET    | {{URL}}/api/todos/{todoId}        | Retrieves the details of a specific todo by sending a GET request to the specified URL with the todo ID.       |
| View All Todo | GET    | {{URL}}/api/todos/                | Retrieves all todos by sending a GET request to the specified URL.                                             |
| Update Todo   | PUT    | {{URL}}/api/todos/update/{todoId} | Updates a specific todo by sending a PUT request to the specified URL with the updated todo details.           |
| Delete Todo   | DELETE | {{URL}}/api/todos/delete/{todoId} | Deletes a specific todo by sending a DELETE request to the specified URL with the todo ID.                     |

## Testing

To ensure the correctness and functionality of the API endpoints, you can utilize the provided Postman collection file (`todo-app-backend.postman_collection.json`) for comprehensive testing and validation.

### Prerequisites

To proceed with testing, please ensure you have the following prerequisites installed:

- Postman: Download and install Postman from the official website [here](https://www.postman.com/downloads/).

### Importing the Collection

Follow these steps to import the Postman collection:

1. Open Postman.
2. Click on "Import" in the top left corner.
3. Select the `todo-app-backend.postman_collection.json` file.
4. The collection will be imported into Postman, and you will see a folder structure corresponding to the API endpoints.

### Running the Requests

To execute the requests and validate the API endpoints, follow these steps:

1. Ensure your server is running.
2. Set the environment variable `URL` in Postman to the base URL of your server.
3. Select the request you want to run from the imported collection.
4. Click on the "Send" button to send the request to the specified URL.
5. Review the response and examine the corresponding status code and data.

Please note that you may need to replace the placeholder (`{{URL}}`) in the URLs with the actual base URL of your server.

## Contributing

Contributions to the Todo App Backend project are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request, describing the changes you made and explaining the purpose and benefits of your contribution.

Thank you for your interest in contributing to the project! Your efforts are greatly appreciated. If you have any questions or need further assistance, feel free to ask. Happy coding!
