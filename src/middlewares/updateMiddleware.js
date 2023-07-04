const httpResponse = require('../helpers/httpResponse')


function updateMiddleware(req, res, next) {

    const { id, name, description, preco, image } = req.body

    if (!id) return httpResponse.badRequest(res, 'Id não informado')
    if (!name &&
        !description &&
        !preco &&
        !image) return httpResponse.badRequest(res, 'Ao menos um campo tem que estar preenchido.')

    if (!Number.isInteger(id)) return httpResponse.badRequest(res, 'Id com formato invalido')

    if (!Number.isInteger(id)) return httpResponse.badRequest(res, 'Id com formato invalido')

    next()

}

module.exports = updateMiddleware