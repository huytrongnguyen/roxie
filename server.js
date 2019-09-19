const express = require('express');
const Bundler = require('parcel');

const portNumber = 4200,
      app = express(),
      bundler = new Bundler('docs/internal/index.html', { sourceMaps: false, contentHash: false, autoInstall: false, outDir: 'docs' });

app .use(bundler.middleware())
    .listen(portNumber, err => {
      if (err) {
        console.error('Unable to start Express.', err);
      } else {
        console.log(`Now listening on: http://localhost:${portNumber}`);
        console.log('Application started. Press Ctrl+C to shut down.');
      }
    });
