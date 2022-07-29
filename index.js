require('dotenv').config();
const express = require('express');
const morgan = require('./middlewares/morgan');
const swaggerUi = require('swagger-ui-express');
const doc = require('./doc');

const AdminRouter = require('./routes/admin.routes');
const ItemRouter = require('./routes/items.routes');
const SellerRouter = require('./routes/seller.routes');
const errorHandler = require('./middlewares/errHandler');

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(doc, {
  swaggerOptions: {
    docExpansion: "none"
  }
}));

app.use(morgan);
app.use(express.urlencoded({ extended: true, type: 'application/x-www-form-urlencoded' }));
app.use(express.json());

app.use('/admin', AdminRouter);
app.use('/seller', SellerRouter);
app.use('/items', ItemRouter);

//  error handler middlerware
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () => {
    console.log('<<<< SERVER RUNNING ON PORT', process.env.PORT);
  })
}

module.exports = app;