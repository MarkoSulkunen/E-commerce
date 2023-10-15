const express = require('express');
const cors = require('cors');

const users = require('./routes/users');
const reservations = require('./routes/reservations');

const app = express();

app.use(express.json());


app.use(cors());


app.use('/api/users', users);
app.use('/api/reservations', reservations);


app.get('/health', (req, res) => {
  res.send('OK');
});

module.exports = app;
