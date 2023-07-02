const express = require('express')
const userValidation = require('../middlewares/authMiddleware')
const { userRegister, login } = require('../controllers/users')
const { hamburguerPost, hamburguersDelete, hamburguerPatch } = require('../middlewares/hamburguerMiddlewares')
const { bebidasPost, bebidasDelete, bebidasPatch } = require('../middlewares/bebidasMiddleware')
const { combosPost, combosDelete, combosPatch } = require('../middlewares/combosMiddlewares')


const routes = express()

routes.post('/register', userRegister)
routes.post('/login', login)

routes.use(userValidation)
routes.get('/hamburguers')
routes.get('/bebidas')
routes.get('/combos')

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

