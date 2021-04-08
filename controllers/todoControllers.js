const Todo = require("../models/Todo");

const allTodo = (req, res) =>{
    res.send("get all")
}

const getTodo = (req, res) =>{
    res.send("")
}

const createTodo = (req, res) =>{
    res.send("")
}

const updatetTodo = (req, res) => {
  res.send("");
}

const deleteTodo = (req, res) => {
  res.send("");
}

module.exports = {
    allTodo,
    getTodo,
    createTodo,
    updatetTodo,deleteTodo
}