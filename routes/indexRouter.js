const { Router } = require('express');
const db = require('../db/queries');

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
  const messages = await db.getMessages();
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = { indexRouter };
