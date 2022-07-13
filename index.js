require('dotenv').config();
const express = require('express');
const { decode } = require('./helpers/jwt');
const AdminRouter = require('./routes/admin.routes');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true, type: 'application/x-www-form-urlencoded' }));
app.use(express.json());

app.use('/admin', AdminRouter);
app.get('/items', (req, res) => {
  const user = decode(req.headers.authorization, '<<<<<');

  console.log(user, '<<<<<<');
  res.status(200).json();
})

app.listen(PORT, () => {
  console.log('<<<< SERVER RUNNING ON PORT', PORT);
})