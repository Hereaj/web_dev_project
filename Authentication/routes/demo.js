const express = require('express');
const bcrpyt = require('bcrypt');

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const enteredUserEmail = userData.email;
  const enteredConfirmEmail = userData['confirm-email'];
  const enteredPassword = userData.password;

  const hashedPassword = await bcrpyt.hash(enteredPassword, 12);

  const userInfo = {
    email: enteredUserEmail,
    password: hashedPassword,
  }

  await db.getDb().collection('users').insertOne(userInfo);

  res.redirect('/login');
});

router.post('/login', async function (req, res) {});

router.get('/admin', function (req, res) {
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
