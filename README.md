# Phonebook API

This is a simple Phonebook API built with Node.js and Express, using MongoDB as the database for storing data.

Live Application: [https://fso-exercises-3.onrender.com/](https://fso-exercises-3.onrender.com/)

## Features

1. Fetch all persons.
2. Fetch a single person by ID.
3. Delete a person by ID.
4. Update person details by ID.
5. Create a new person.

## Prerequisites

- Node.js and npm installed.
- MongoDB database connection.

## Setup

First, clone the repository:

```
git clone <repository_url>
```

Then, move into the directory:

```
cd <repository_dir>
```

Install the necessary packages:

```
npm install
```

Create a `.env` file in the root directory with the following content:

```
PORT=<your_desired_port>
DB_URL=<your_mongodb_connection_url>
```

Make sure to replace `<your_desired_port>` and `<your_mongodb_connection_url>` with your preferred port number and MongoDB connection string respectively.

## Usage

To start the application, use the command:

```
npm start
```

This will start the server at the port you provided in the `.env` file.

## API Endpoints

1. `GET /api/persons`: Fetch all persons.
2. `GET /api/persons/:id`: Fetch a single person by ID.
3. `DELETE /api/persons/:id`: Delete a person by ID.
4. `PUT /api/persons/:id`: Update a person's details. The request body must contain `name` and `number`.
5. `POST /api/persons`: Create a new person. The request body must contain `name` and `number`.

## Error Handling

The application uses a custom error handler for dealing with errors. If there is an error during a request, the error handler will send an appropriate HTTP status code and message.

## Logging

The application uses `morgan` for logging HTTP requests. The log format is `:method :url :status :res[content-length] - :response-time ms :body`.

## Testing

No tests are provided in the repository. If you wish to add tests, you could add them in a `test` directory, and use a testing framework like Jest or Mocha.

Note: Always remember to ensure that your MongoDB database is secure. Do not expose your MongoDB connection string and always use a password for your MongoDB database.

Save this content as `README.md` in the root directory of your project. The `README.md` file is typically used by GitHub and other version control platforms to display a descriptive summary of the project. The `.md` extension stands for Markdown, which is a lightweight markup language for creating formatted text.
