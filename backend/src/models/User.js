const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: { type: String, required: true },
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  reg_date: { type: Date, default: Date.now },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
