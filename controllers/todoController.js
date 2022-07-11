const { Op } = require('sequelize');
const Todo = require('../models/TodoModel');

const getAllTodos = async (req, res) => {
  const todos = await Todo.findAll({attributes: ['id', 'todoTitle', 'todoDesc']});
  res.send(todos);
};

const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if(!todo) {
    return res.send({msg: 'Todo not found'});
  }
  res.send(todo);
};

const createTodo = async (req, res) => {
  const { todoTitle, todoDesc } = req.body;
  if(!todoTitle || !todoDesc) {
    return res.status(400).send('Invalid request');
  }
  const createdId = await Todo.create({todoTitle: todoTitle, todoDesc: todoDesc});
  res.status(201).send({msg: `Todo created with the id: ${createdId.id}`}) ;
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deleteStatus = await Todo.destroy({where: {id: id}})
  if(deleteStatus === 0) {
    return res.status(400).send({msg: 'Todo not found'});
  }
  res.send({msg: 'Todo deleted successfully'});
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;
  const updateStatus = await Todo.update(data, {where: {id: id}});
  res.send({msg: `${updateStatus} todo(s) were updated`});
};

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
