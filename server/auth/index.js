const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('reached Auth router');
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    console.log(user)
    if (!user) {
      return res.status(404).json({ error: 'User Not Found.' });
    }

    // Compare entered password with stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password.' });
    }

    // If valid, generate a JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT);
    res.send({id: user.id, token: token});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, phone, first_name, last_name, admin } = req.body;

    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            phone,
            first_name,
            last_name,
            admin: false
        }
    });
    console.log(newUser)
    const token = jwt.sign({id: newUser.id}, process.env.JWT)
    res.status(201).json({ message: 'User registered successfully', token: token, userId: newUser.id });

  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Please try again.'});
  }
});


module.exports = router;