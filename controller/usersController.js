/* eslint-disable no-unused-vars */
const User = require('../models/userModel');
const Todo = require('../models/todoModel');
const process = require('process');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      name,
      email,
      password: hashedPassword,
      age,
    });
    await user.save();

    const payload = {
      user: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    res.cookie('token', token, {
      httpOnly: true,
      expiresIn: 360000,
    });

    const { password: pass, ...rest } = user._doc;

    res.status(201).json({
      message: 'User created successfully',
      user: rest,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Credentials',
      });
    }

    const payload = {
      user: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    res.cookie('token', token, {
      httpOnly: true,
      expiresIn: 360000,
    });

    const { password: pass, ...rest } = user._doc;

    res.status(200).json({
      message: 'User Logged in successfully',
      user: rest,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie('token');

  res.status(200).json({
    message: 'User Logged out successfully',
  });
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const { password: pass, ...rest } = user._doc;
    return res.status(200).json({
      message: 'User found',
      user: rest,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};

exports.updateDetails = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    let user = await User.findById(req.user);
    if (!user)
      return res.status(404).json({
        message: 'User not found',
      });

    let exists = await User.findOne({ email });
    if (exists && exists._id.toString() !== user._id.toString()) {
      return res.status(404).json({
        message: 'email already exists',
      });
    }
    user.name = name;
    user.email = email;
    user.age = age;

    await user.save();

    const { password: pass, ...rest } = user._doc;
    return res.status(200).json({
      message: 'User updated successfully',
      user: rest,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};

exports.updatePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    let user = await User.findById(req.user);
    if (!user)
      return res.status(404).json({
        message: 'User not found',
      });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Credentials',
      });
    }

    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    const { password: pass, ...rest } = user._doc;

    return res.status(200).json({
      message: 'Password updated successfully',
      user: rest,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user)
      return res.status(404).json({
        message: 'User not found',
      });

    await Todo.deleteMany({ user: req.user });
    res.clearCookie('token');
    await User.findByIdAndDelete(req.user);
    return res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      errors: 'Internal Server Error',
    });
  }
};
