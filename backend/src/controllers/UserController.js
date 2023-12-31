const User = require('../models/User');

class UserController {
  async register(userInfo) {
    try {
      // Create a new user
      const newUser = new User(userInfo);

      // Save the user to the database
      const savedUser = await newUser.save();

      return savedUser;
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

  async createAccount(userInfo) {
    // Implement create account logic
  }

  async login(email, password) {
    // Implement login logic
  }
}

module.exports = new UserController();
