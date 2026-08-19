// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";
let conn = mongoose.connect("mongodb://localhost:27017/todo");


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const newTodo = new todo({ title: "hey first todo", desc: "description of this todo", isDone: false });
  newTodo.save();
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});