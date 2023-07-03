const httpResponse = require('../helpers/httpResponse')
const deleteMiddlewares = (req, res, next) => {
    const { id } = req.params
    console.log(id)
    if (isNaN(id)) return httpResponse.badRequest(res, 'Id invalido')

    next()
}

module.exports = deleteMiddlewares