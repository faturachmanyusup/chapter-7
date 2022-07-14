const { Item } = require('../models');

class ItemController {
  static getAll(req, res) {
    return Item.findAll()
      .then((items) => {
        console.log(items, '<<<<');
        return res.status(200).json({
          status: 200,
          message: 'Berhasil mendapatkan Items',
          items: items
        })
      })
      .catch(err => {
        return res.status(err.status || 500).json(err);
      })
  }

  static create(req, res) {
    return Item.create({
      name: req.body.name,
      price: req.body.price,
      seller_id: req.user.id
    })
      .then(() => {
        return res.status(201).json({
          status: 201,
          message: 'Berhasil membuat item',
        })
      })
      .catch(err => {
        return res.status(err.status || 500).json(err);
      })
  }
}

module.exports = ItemController;