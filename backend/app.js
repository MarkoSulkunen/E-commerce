const express = require('express');
const cors = require('cors');

const users = require('./routes/users');

const app = express();

app.use(express.json());


app.use(cors({
  origin: [
    'http://localhost:5173',

  ] 
}));


app.use('/api/users', users);


app.get('/health', (req, res) => {
  res.send('OK');
});

module.exports = app;
