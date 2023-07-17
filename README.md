# FSO Phonebook Backend

This project is the backend for a simple phonebook application. It is built using Node.js, Express, and uses the Morgan middleware for logging and CORS middleware for enabling Cross Origin Resource Sharing.

## Features

- List all persons in the phonebook
- Fetch single person's information
- Add a new person to the phonebook
- Delete a person from the phonebook
- Logs data about every HTTP request

## Installation

1. Clone this repository

```sh
git clone https://github.com/<username>/fso-phonebook-backend.git
```

2. Navigate to the repository

```sh
cd fso-phonebook-backend
```

3. Install the dependencies

```sh
npm install
```

4. Start the server

```sh
npm start
```

Your server should now be running at `http://localhost:3001`.

## Endpoints

- `GET /api/persons` - Returns all persons
- `GET /api/persons/:id` - Returns a single person by id
- `POST /api/persons` - Adds a new person to the phonebook
- `DELETE /api/persons/:id` - Deletes a person from the phonebook by id
- `GET /info` - Returns the count of persons in the phonebook and the current server time

## Live Application

The application is hosted on Render at [https://fso-exercises-3.onrender.com/](https://fso-exercises-3.onrender.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

You can add more sections like 'Testing', 'Known Issues', 'Future Scope' etc based on your requirements. Also, remember to replace `<username>` with your actual GitHub username.
