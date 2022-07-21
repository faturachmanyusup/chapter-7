const fs = require('fs');
const { upload } = require('../helpers/upload');
const { Item } = require('../models');

class ItemController {
  static getAll(req, res, next) {
    return Item.findAll()
      .then((items) => {
        return res.status(200).json({
          status: 200,
          message: 'Berhasil mendapatkan Items',
          items: items
        })
      })
      .catch(err => next(err))
  }

  static create(req, res, next) {
    const filePath = './files/' + req.filePath;

    return upload(filePath)
      .then((url) => {
        fs.unlinkSync(filePath);

        return Item.create({
          name: req.body.name,
          price: req.body.price,
          seller_id: req.user.id,
          image: url
        })
      })
      .then(() => {
        return res.status(201).json({
          status: 201,
          message: 'Berhasil membuat item',
        })
      })
      .catch(err => next(err))
  }
}

module.exports = ItemController;