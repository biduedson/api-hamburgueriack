const { deleteItem, selectItem } = require('../helpers/databaseHelpers')
const httpResponse = require('../helpers/httpResponse')

const deleteHamburguer = async (req, res) => {
    const { id } = req.params

    try {
        const findItem = await selectItem(id, 'hamburguers')

        if (!findItem) return httpResponse.notFound(res, 'Item não encontrado')

        await deleteItem(id, 'hamburguers')

        return httpResponse.noContent(res)
    } catch (err) {
        return httpResponse.internalServerError(res)
    }
}

const deleteBebida = async (req, res) => {
    const { id } = req.params

    try {
        const findItem = await selectItem(id, 'bebidas')

        if (!findItem) return httpResponse.notFound(res, 'Item não encontrado')

        await deleteItem(id, 'bebidas')

        httpResponse.noContent(res)
    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

const deleteCombo = async (req, res) => {
    const { id } = req.params

    try {
        const findItem = await selectItem(id, 'combos')

        if (!findItem) return httpResponse.notFound(res, 'Item não encontrado')

        await deleteItem(id, 'combos')

        httpResponse.noContent(res)
    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

module.exports = {
    deleteHamburguer,
    deleteBebida,
    deleteCombo
}