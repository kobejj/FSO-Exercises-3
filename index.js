require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const db = require("./db");
const Person = require("./models/schema");
const errorHandler = require("./errorHandler");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

db.connectDB();
//app.use(morgan("tiny"));

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", async (req, res, next) => {
  try {
    const persons = await db.getPersons();
    res.json(persons);
  } catch (err) {
    next(err);
  }
});

app.get("/api/persons/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const person = await Person.findById(id); // Mongoose method to find by id
    if (person) {
      res.json(person);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
    res.status(500).end();
  }
});

app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for 2 people</p> <br/> <p>${new Date()}</p>`);
});

app.delete("/api/persons/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      error: "No id provided",
    });
  }
  try {
    await Person.findByIdAndRemove(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", async (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "name or number is missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

// app.get("/api/persons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const person = persons.find((person) => person.id === id);
//   if (person) {
//     res.json(person);
//   } else {
//     res.status(404).end();
//   }
// });

//   const nameExists = persons.some((person) => person.name === body.name);

//   if (nameExists) {
//     return res.status(400).json({
//       error: "name must be unique",
//     });
//   }
