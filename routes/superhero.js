const { Router } = require('express');
const SuperheroController = require('../controllers/superhero.controller.js');
// const paginate = require('../middlewares/paginate.mw');

const superheroRouter = Router();

// superheroRouter.post('/', UserController.createUser);
// userRouter.get('/', paginate, UserController.getAllUsers);
// userRouter.get('/:id', UserController.getUser);
// userRouter.patch('/:id', UserController.updateUser);
// userRouter.delete('/:id', UserController.deleteUser);

module.exports = superheroRouter;