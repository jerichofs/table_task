let data = require("../data");

const getTable = (req, res) => {
  return res.status(200).json({
    table: data.table
  });
};

const addRow = (req, res) => {
  const { text } = req.body;

  // check if the table approaches the limit of 10 rows
  if (data.table.length >= 10) {
    return res.status(403).json({
      status: 403,
      message: "The limit of 10 rows exceeded"
    });
  }

  data.table.push({
    id: data.tableId,
    row: text
  });

  data.tableId += 1;

  return res.status(200).json({
    status: 200,
    message: "OK"
  });
};

module.exports = {
  getTable,
  addRow
};
