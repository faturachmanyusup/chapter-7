const ItemRouter = require('express').Router();
const ItemController = require('../controllers/ItemController');
const { authentication, authorization } = require('../middlewares/auth');
const multer = require('../config/multer');

ItemRouter.get('/', ItemController.getAll);


ItemRouter.use(authentication);

ItemRouter.get('/:id', ItemController.getAll);
ItemRouter.post('/', authorization.seller, multer.single('file'), ItemController.create);

module.exports = ItemRouter;