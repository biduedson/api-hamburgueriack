const express = require('express')
const userValidation = require('../middlewares/authMiddleware')
const { userRegister, login } = require('../controllers/users')
const { hamburguerPost, hamburguersDelete, hamburguerPatch } = require('../middlewares/hamburguerMiddlewares')
const { bebidasPost, bebidasDelete, bebidasPatch } = require('../middlewares/bebidasMiddleware')
const { combosPost, combosDelete, combosPatch } = require('../middlewares/combosMiddlewares')
const { hamburguerList, combosList, bebidasList } = require('../controllers/getItens')
const postMiddlewares = require('../middlewares/postMiddlewares')
const patchMiddleware = require('../middlewares/patchMiddleware')
const { newHamburguer, newBebida, newCombo } = require('../controllers/create')
const deleteMiddlewares = require('../middlewares/deleteMiddleware')
const { deleteHamburguer, deleteBebida, deleteCombo } = require('../controllers/delete')


const routes = express()

routes.post('/register', userRegister)
routes.post('/login', login)

routes.get('/hamburguers', hamburguerList)
routes.get('/bebidas', bebidasList)
routes.get('/combos', combosList)

routes.use(userValidation)


routes.post('/hamburguers', postMiddlewares, newHamburguer)
routes.post('/bebidas', postMiddlewares, newBebida)
routes.post('/combos', postMiddlewares, newCombo)

routes.delete('/hamburguers/:id', deleteMiddlewares, deleteHamburguer)
routes.delete('/bebidas/:id', deleteMiddlewares, deleteBebida)
routes.delete('/combos/:id', deleteMiddlewares, deleteCombo)

routes.patch('/hamburguers/:id', patchMiddleware)
routes.patch('/bebidas/:id', patchMiddleware)
routes.patch('/combos/:id', patchMiddleware)


module.exports = routes

