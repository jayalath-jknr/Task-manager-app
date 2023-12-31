const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserController = require('./controllers/UserController');

mongoose.connect('mongodb+srv://admin:admin@task-app.aq4zfvd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await UserController.register(userInfo);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add routes for createAccount and login using UserController

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
