const express = require('express');
const router = express.Router();

const {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todoController');

router.get('/', getAllTodos);

router.get('/:id', getSingleTodo);

router.post('/', createTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;