/* eslint-disable no-console */
'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pino = require('express-pino-logger');
const hbs = require('express-handlebars');
const path = require('path');

const routes = require('./frameworks/web/routes');
const projectDependencies = require('./config/projectDependencies');
const errorHandler = require('./frameworks/utils/middleware/errorHandler');

const app = express();

projectDependencies.DatabaseService.initDatabase().then(
  () => {
    app.engine('.hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }));
    app.set('views', path.join(__dirname, 'web/views'));
    app.set('view engine', '.hbs');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors());
    app.use(helmet());
    app.use(pino());

    app.use('/api', routes(projectDependencies));

    app.use(errorHandler);

    // const gamesRouterCommand = require('./web/routes/gamesRouter');

    // app.get('/', (req, res) => {
    //   res.render('index', { layout: 'main' });
    // });

    // app.use('/api', gamesRouterCommand({ router }).create());

    // eslint-disable-next-line no-magic-numbers
    app.listen(3000, () => {
      console.log(`App listening in http://localhost:3000`);
    });
  },
  (err) => {
    console.log('db is not ready', err);
  }
);
