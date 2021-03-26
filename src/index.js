'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pino = require('express-pino-logger');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(pino());

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening in http://localhost:3000`);
});
