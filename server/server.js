const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(_dirname, '../src/index.html'))})



app.use('/index', apiRouter)

// Default 404 handler
app.use('*', (req, res) => {
    res.status(404)
    .send(
      'Page not found'
    );
});

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    message: { err: 'An error occurred' },
    log: 'Express error handler caught unknown middleware error',
    status: 400,
  };
  const errObj = Object.assign(defaultErr, err);
  console.log('ErrorObject Log: ', errObj.log);
  res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Express Node server listening on ${PORT}`);
});

module.exports = app;