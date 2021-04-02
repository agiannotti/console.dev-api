require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const foldersRouter = require('./Folders/folder-router');
const noteRouter = require('./Notes/note-router');
const userRouter = require('./auth/auth-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/folder', foldersRouter);
app.use('/api/note', noteRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Console.dev!');
});

app.use(function errorHandler(error, req, res, __next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
