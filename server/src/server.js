/**
 * Note: As i understood i shouldn't be using any types of persistent database
 * instead in-memory storage is required
 * so the data is going to be stored in the form of plain objects
 */
const express = require("express");
const cors = require("cors");

const table = require("./routes/table");

const app = express();

const port = 8000;

app.use(cors());

app.use("/table", table);

app.use((req, res) =>
  res.status(404).json({
    status: 404,
    msg: "Not found"
  })
);

const server = app.listen(port, () =>
  console.log("Server is listening on port", port)
);

module.exports = server;
