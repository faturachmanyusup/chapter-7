require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const doc = require('./doc');

const AdminRouter = require('./routes/admin.routes');
const ItemRouter = require('./routes/items.routes');
const SellerRouter = require('./routes/seller.routes');

const app = express();
const PORT = 4000;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(doc, {
  swaggerOptions: {
    docExpansion: "none"
  }
}));

app.use(express.urlencoded({ extended: true, type: 'application/x-www-form-urlencoded' }));
app.use(express.json());

app.use('/admin', AdminRouter);
app.use('/seller', SellerRouter);
app.use('/items', ItemRouter);

app.listen(PORT, () => {
  console.log('<<<< SERVER RUNNING ON PORT', PORT);
})