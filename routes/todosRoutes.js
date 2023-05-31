const express = require('express');
const todosController = require('./../controller/todosController');
const authorize = require('../middleware/authorize');
const validator = require('./../middleware/validator');
const validateResult = require('./../middleware/validationResults');

const router = express.Router();

router.get('/:id', authorize, todosController.getTodo);
router.get('/', authorize, todosController.getTodos);
router.post(
  '/create',
  authorize,
  validator.createTodoRules,
  validateResult.validateResult,
  todosController.createTodo
);
router.put(
  '/update/:id',
  authorize,
  validator.updateTodoRules,
  validateResult.validateResult,
  todosController.updateTodo
);
router.delete('/delete/:id', authorize, todosController.deleteTodo);

module.exports = router;
