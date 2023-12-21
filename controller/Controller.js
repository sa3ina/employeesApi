const Employee = require("../models/Models");
const getAll = async (req, res) => {
  const posts = await Employee.find();
  res.send(posts);
};
const getById = async (req, res) => {
  const posts = await Employee.findOne({ id: req.params.id });
  res.send(posts);
};
const deleteEmployee = async (req, res) => {
  await Employee.deleteOne({ id: req.params.id });
  res.status(204).send();
};
const postEmployee = async (req, res) => {
  // const posts = await Employee.findOne({ id: req.params.id });

  const post = new Employee({
    name: req.body.name,
    job: req.body.job,
    age: req.body.age,
    id: req.body.id,
  });
  await post.save();
  res.send(post);
  // if (posts) {
  //   console.log("already exist");
  // } else {
  //   const post = new Employee(req.body);
  //   post.save();
  // }
};
const patchEmployee = async (req, res) => {
  const post = await Employee.findOne({ id: req.params.id });

  if (req.body.name) {
    post.name = req.body.name;
  }

  if (req.body.job) {
    post.job = req.body.job;
  }
  if (req.body.age) {
    post.age = req.body.age;
  }

  await post.save();
  res.send(post);
};
const putEmployee = async (req, res) => {
  const posts = await Employee.replaceOne({ id: req.params.id }, req.body);
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
