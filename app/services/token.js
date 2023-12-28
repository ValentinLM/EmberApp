/* eslint-disable no-undef */
'use stric';

module.exports = (app) => {
  const express = require('express');
  let tokenRouter = express.Router();

  tokenRouter.post('/', (req, res) => {
    let { username, password } = req.body;
    if (username === 'Vale' && password === 'vale123') {
      res.status(200).json({ token: 'secret token!' });
    } else {
      res.status(401).send('invalid credentials');
    }
  });

  app.use('/api/token', require('body-parser').json());
  app.use('/api/token', tokenRouter);
};
