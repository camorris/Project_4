const
  express = require('express')
  userRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js'),
  verifyToken = require('../serverAuth.js').verifyToken

  usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)

  usersRouter.post('authenticate', userCtrl.authenticate)

  usersRouter.use(verifyToken)
  usersRouter.route('/:id')
    .get(usersCtrl.show)
    .patch(usersCtrl.update)
    .delete(usersCtrl.destroy)

  module.exports = usersRouter