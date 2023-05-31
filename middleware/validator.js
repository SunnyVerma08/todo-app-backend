const { check } = require('express-validator');

exports.registerRules = [
  check('name', 'Name is Required').notEmpty().trim().escape(),
  check('email', 'please give valid email').isEmail().normalizeEmail(),
  check('password', 'password should be 6 or more characters').isLength({
    min: 6,
  }),
  check('age', 'Age is required').notEmpty().trim().escape().isNumeric(),
];

exports.loginRules = [
  check('email', 'please give valid email').isEmail().normalizeEmail(),
  check('password', 'password should be 6 or more characters').isLength({
    min: 6,
  }),
];

exports.updateDetailsRules = [
  check('name', 'Name is Required').notEmpty().trim().escape(),
  check('email', 'please give valid email').isEmail().normalizeEmail(),
  check('age', 'Age is required').notEmpty().trim().escape().isNumeric(),
];

exports.updatePasswordRules = [
  check('password', 'password should be 6 or more characters').isLength({
    min: 6,
  }),
  check('newPassword', 'password should be 6 or more characters').isLength({
    min: 6,
  }),
];

exports.createTodoRules = [
  check('title', 'Title is required').notEmpty().trim().escape(),
  check('description', 'Description is required').notEmpty().trim().escape(),
];

exports.updateTodoRules = [
  check('title', 'Title is required').notEmpty().trim().escape(),
  check('description', 'Description is required').notEmpty().trim().escape(),
  check('completed', 'completed is required')
    .notEmpty()
    .trim()
    .escape()
    .isBoolean(),
];
