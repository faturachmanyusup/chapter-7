const { User } = require('../models');
const { validateText } = require("../helpers/bcrypt");
const { encode } = require("../helpers/jwt");

class AdminController {
  static register(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: 1
    })
      .then(() => {
        res.status(201).json({
          message: 'Berhasil Registrasi!'
        })
      })
      .catch(err => {
        res.status(err.status || 500).json(err);
      })
  }

  static login(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (!user) throw {
          status: 404,
          message: 'User not found'
        };

        const isValid = validateText(req.body.password, user.dataValues.password);
        if (!isValid) throw {
          status: 400,
          message: 'Wrong password!'
        }

        return res.status(200).json({
          message: 'Berhasil login',
          token: encode({
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email,
            role: user.dataValues.role
          })
        });
      })
      .catch((err) => res.status(err.status || 500).json(err))
  }
}

module.exports = AdminController;