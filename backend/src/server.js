const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

//mongoose.connect('put your mongo_url here', {
mongoose.connect('put you mongo_url here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3334);
 