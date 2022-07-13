const AdminRouter = require('express').Router();
const AdminController = require('../controllers/AdminController');

AdminRouter.post('/register', AdminController.register);
AdminRouter.post('/login', AdminController.login);

module.exports = AdminRouter;