const express = require("express");
const table = express.Router();
const bodyParser = require("body-parser");

const { getTable, addRow } = require("../controllers/table");
const { validate } = require("../middleware/validation");
const { addRowSchema } = require("../validation/table");

// Get the table data
table.get("/", getTable);

// Add new row to the table
table.post("/row", bodyParser.json(), validate(addRowSchema, "body"), addRow);

// handle 404 error
table.use((req, res) =>
  res.status(404).json({
    status: 404,
    msg: "Not Found."
  })
);

module.exports = table;
