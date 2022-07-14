const AdminRouter = require('express').Router();
const AdminController = require('../controllers/AdminController');
const { authentication, authorization } = require('../middlewares/auth');

AdminRouter.post('/register', AdminController.register);
AdminRouter.post('/login', AdminController.login);

AdminRouter.get('/', authentication, authorization.admin, AdminController.getAll);

module.exports = AdminRouter;