const ItemRouter = require('express').Router();
const ItemController = require('../controllers/ItemController');
const { authentication, authorization } = require('../middlewares/auth');

ItemRouter.get('/', ItemController.getAll);


ItemRouter.use(authentication);

ItemRouter.get('/:id', ItemController.getAll);
ItemRouter.post('/', authorization.seller, ItemController.create);

module.exports = ItemRouter;