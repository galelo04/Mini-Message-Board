const path = require('path');
const express = require('express');
require('dotenv').config();

const indexRouter = require('./routes/indexRouter').indexRouter;
const newMessagesRouter = require('./routes/newMessagesRouter');

const app = express();

const assetsPath = path.join(__dirname, './public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessagesRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log('listening...');
});
