const { Router } = require('express');

const newMessagesRouter = Router();
const messages = require('./indexRouter').messages;

newMessagesRouter.get('/', (req, res) => {
  res.render('form', { title: 'New Message' });
});

newMessagesRouter.post('/', (req, res) => {
  const { user, text } = req.body;
  const message = {
    user,
    text,
    added: new Date(),
  };
  messages.push(message);
  res.redirect('/');
});

module.exports = newMessagesRouter;
