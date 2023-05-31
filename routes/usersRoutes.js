const express = require('express');
const usersController = require('./../controller/usersController');
const authorize = require('../middleware/authorize');
const validateResult = require('../middleware/validationResults');
const validator = require('./../middleware/validator');

const router = express.Router();

router.post(
  '/register',
  validator.registerRules,
  validateResult.validateResult,
  usersController.register
);
router.post(
  '/login',
  validator.loginRules,
  validateResult.validateResult,
  usersController.login
);
router.get('/logout', authorize, usersController.logout);
router.get('/me', authorize, usersController.getMe);
router.put(
  '/updatedetails',
  authorize,
  validator.updateDetailsRules,
  validateResult.validateResult,
  usersController.updateDetails
);
router.put(
  '/updatepassword',
  authorize,
  validator.updatePasswordRules,
  validateResult.validateResult,
  usersController.updatePassword
);
router.delete('/delete', authorize, usersController.deleteUser);

module.exports = router;
