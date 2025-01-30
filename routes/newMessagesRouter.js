const { Router } = require('express');
const db = require('../db/queries');

const newMessagesRouter = Router();

newMessagesRouter.get('/', (req, res) => {
  res.render('form', { title: 'New Message' });
});

newMessagesRouter.post('/', async (req, res) => {
  const { user, text } = req.body;
  await db.addMessage(text, user);
  res.redirect('/');
});

module.exports = newMessagesRouter;
