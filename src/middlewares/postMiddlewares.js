const httpResponse = require('../helpers/httpResponse')

function postMiddlewares(req, res, next) {
    const { name, description, preco } = req.body

    if (!name) return httpResponse.badRequest(res, 'Campo nome  não pode estar vazio')

    if (!description) return httpResponse.badRequest(res, 'Campo descrição  não pode estar vazio')

    if (!preco) return httpResponse.badRequest(res, 'Campo preço  não pode estar vazio')

    next()

}

module.exports = postMiddlewares