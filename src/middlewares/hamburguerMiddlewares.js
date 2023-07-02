const httpResponse = require('../helpers/httpResponse')

function hamburguerPost(req, res, next) {
    const { hamburguer_name, description, preco } = req.body

    if (!hamburguer_name) return httpResponse.badRequest(res, 'Campo nome  não pode estar vazio')

    if (!description) return httpResponse.badRequest(res, 'Campo descrição  não pode estar vazio')

    if (!preco) return httpResponse.badRequest(res, 'Campo preço  não pode estar vazio')

    next()

}

function hamburguerPatch(req, res, next) {
    const { id, hamburguer_name, description, preco } = req.body

    if (!hamburguer_name &&
        !description &&
        !preco &&
        !image) return httpResponse.badRequest(res, 'Ao menos um campo tem que estar preenchido.')

    if (!id) return httpResponse.badRequest(res, 'Id não informado')

    if (!Number.isInteger(id)) return httpResponse.badRequest(res, 'Id com formato invalido')

    if (!Number.isInteger(id)) return httpResponse.badRequest(res, 'Id com formato invalido')

    next()

}

function hamburguersDelete(req, res, next) {
    const { id } = req.query
    if (!id) return httpResponse.badRequest(res, 'Id não informado')
    next()

}

module.exports = {
    hamburguerPost,
    hamburguersDelete,
    hamburguerPatch
}