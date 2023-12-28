const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Provide an Email'],
        unique: [true, 'Email Already Exists']
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password'],
        minlength: 6,
        unique: false
    }
});


UserSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) return next();
  
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      return next(error);
    }
  });

module.exports = mongoose.model.Users || mongoose.model('Users', UserSchema);