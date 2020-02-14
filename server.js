const express = require('express');

const portNumber = 4200,
      app = express();

app .use('/', express.static('packages/docs/dist'))
    .listen(portNumber, err => {
      if (err) {
        console.error('Unable to start Express.', err);
      } else {
        console.log(`Now listening on: http://localhost:${portNumber}`);
        console.log('Application started. Press Ctrl+C to shut down.');
      }
    });
