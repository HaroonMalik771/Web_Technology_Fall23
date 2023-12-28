const User = require('../models/userModel');

exports.registerForm = (req, res) => {
    res.render('users/add');
};

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect('/users');
};

exports.listUsers = async (req, res) => {
    const users = await User.find();
    res.render('users/list', { users });
};

exports.editUserForm = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/edit', { user });
};

exports.updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
};
