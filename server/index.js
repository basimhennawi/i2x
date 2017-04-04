import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as Q from 'q';
import * as _ from 'lodash';
import * as path from 'path';
import * as glob from 'glob';

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';
const setup = require('./middlewares/frontend-middleware');
const resolve = require('path').resolve;
const dotenv = require('dotenv');

process.noDeprecation = true;
if (fs.existsSync(resolve(process.cwd(), '.env'))) {
  dotenv.config();
}

const host = '0.0.0.0';
const port = argv.port || process.env.PORT || 8080;

const configureExpressApp = async (app) => {
  app.use(bodyParser.json());
  app.use(cors());

  return app;
}

const runServer = async () => {
  const app = express();

  // Configure Express app
  await configureExpressApp(app);

  // Any shared configuration for production and dev
  setup(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
  });
  
  const server = http.createServer(app);

  // Start your app.
  server.listen(port, host, async (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('\n************************************************');
      console.log('**        i2x challenge | Basim Hennawi       **');
      console.log('** Server listening on: http://localhost:%s **', port);
      console.log('************************************************\n');
    }

  });
};

runServer();
