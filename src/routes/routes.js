const express = require('express')
const userValidation = require('../middlewares/authMiddleware')
const { userRegister, login } = require('../controllers/users')

const postMiddlewares = require('../middlewares/postMiddlewares')
const updateMiddleware = require('../middlewares/updateMiddleware')
const deleteMiddlewares = require('../middlewares/deleteMiddleware')

const { hamburguerList, combosList, bebidasList } = require('../controllers/getItens')
const { newHamburguer, newBebida, newCombo } = require('../controllers/create')
const { deleteHamburguer, deleteBebida, deleteCombo } = require('../controllers/delete')
const { updateHamburguer, updateBebidas, updateCombos } = require('../controllers/update')


const routes = express()

routes.post('/register', userRegister)
routes.post('/login', login)

routes.use(userValidation)

routes.get('/hamburguers', hamburguerList)
routes.get('/bebidas', bebidasList)
routes.get('/combos', combosList)

routes.post('/hamburguers', postMiddlewares, newHamburguer)
routes.post('/bebidas', postMiddlewares, newBebida)
routes.post('/combos', postMiddlewares, newCombo)
routes.post('/upload')

routes.delete('/hamburguers/:id', deleteMiddlewares, deleteHamburguer)
routes.delete('/bebidas/:id', deleteMiddlewares, deleteBebida)
routes.delete('/combos/:id', deleteMiddlewares, deleteCombo)

routes.patch('/hamburguers', updateMiddleware, updateHamburguer)
routes.patch('/bebidas', updateMiddleware, updateBebidas)
routes.patch('/combos', updateMiddleware, updateCombos)


module.exports = routes

