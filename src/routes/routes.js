const express = require('express')
const userValidation = require('../middlewares/authMiddleware')
const { userRegister, login } = require('../controllers/users')
const { hamburguerPost, hamburguersDelete, hamburguerPatch } = require('../middlewares/hamburguerMiddlewares')
const { bebidasPost, bebidasDelete, bebidasPatch } = require('../middlewares/bebidasMiddleware')
const { combosPost, combosDelete, combosPatch } = require('../middlewares/combosMiddlewares')
const { hamburguerList, combosList, bebidasList } = require('../controllers/getItens')


const routes = express()

routes.post('/register', userRegister)
routes.post('/login', login)

routes.get('/hamburguers', hamburguerList)
routes.get('/bebidas', bebidasList)
routes.get('/combos', combosList)

routes.use(userValidation)


routes.post('/hamburguers', hamburguerPost)
routes.post('/bebidas', bebidasPost)
routes.post('/combos', combosPost)

routes.delete('/hamburguers/:id', hamburguersDelete)
routes.delete('/bebidas/:id', bebidasDelete)
routes.delete('/combos/:id', combosDelete)

routes.patch('/hamburguers/:id', hamburguerPatch)
routes.patch('/bebidas/:id', bebidasPatch)
routes.patch('/combos/:id', combosPatch)


module.exports = routes

