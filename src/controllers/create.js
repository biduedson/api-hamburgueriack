const { createItem } = require('../helpers/databaseHelpers')
const httpResponse = require('../helpers/httpResponse')

const newHamburguer = async (req, res) => {
    try {
        const item = req.body
        const newItem = await createItem(item, 'hamburguers')
        return httpResponse.created(res, newItem)

    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

const newBebida = async (req, res) => {
    try {
        const item = req.body
        const newItem = await createItem(item, 'bebidas')
        return httpResponse.created(res, newItem)

    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

const newCombo = async (req, res) => {
    try {
        const item = req.body
        const newItem = await createItem(item, 'combos')
        return httpResponse.created(res, newItem)

    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

module.exports = {
    newHamburguer,
    newBebida,
    newCombo
} 