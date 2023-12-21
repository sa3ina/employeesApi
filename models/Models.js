const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    job: String,
    id: String,
  },
  {
    collection: "Employees",
    timestamp: true,
  }
);

const Insan = mongoose.model("Employees", schema);
module.exports = Insan;
