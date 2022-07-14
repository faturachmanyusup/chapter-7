const { decode } = require("../helpers/jwt")

module.exports = {
  authentication: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized. Only logged in users can access this endpoint.'
      })
    }

    try {
      req.user = decode(req.headers.authorization);
    } catch (err) {
      return res.status(401).json({
        status: 400,
        message: 'Token invalid'
      })
    }

    next();
  },
  authorization: {
    admin: (req, res, next) => {
      if (req.user.role === 1) next();

      return res.status(401).json({
        status: 401,
        message: 'Unauthorized. Only admin can access this endpoint.'
      })
    },
    seller: (req, res, next) => {
      if (req.user.role === 2) next();

      return res.status(401).json({
        status: 401,
        message: 'Unauthorized. Only seller can access this endpoint.'
      })
    },
  }
}