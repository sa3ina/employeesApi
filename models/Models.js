const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    job: String,
  },
  {
    collection: "Employees",
    timestamp: true,
  }
);

const Insan = mongoose.model("Employees", schema);
module.exports = Insan;
