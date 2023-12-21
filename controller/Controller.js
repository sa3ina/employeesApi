const Employee = require("../models/Models");
const getAll = async (req, res) => {
  const posts = await Employee.find();
  res.send(posts);
};
const getById = async (req, res) => {
  const posts = await Employee.findOne({ _id: req.params.id });
  res.send(posts);
};
const deleteEmployee = async (req, res) => {
  await Employee.deleteOne({ _id: req.params.id });
  res.status(204).send();
};
const postEmployee = async (req, res) => {
  const post = new Employee({
    name: req.body.name,
    job: req.body.job,
  });
  await post.save();
  res.send(post);
};
const patchEmployee = async (req, res) => {
  const post = await Employee.findOne({ _id: req.params.id });

  if (req.body.name) {
    post.name = req.body.name;
  }

  if (req.body.job) {
    post.job = req.body.job;
  }

  await post.save();
  res.send(post);
};
const putEmployee = async (req, res) => {
  const posts = await Employee.replaceOne({ _id: req.params.id }, req.body);
  res.send(posts);
};
module.exports = {
  getAll,
  getById,
  deleteEmployee,
  postEmployee,
  patchEmployee,
  putEmployee,
};
