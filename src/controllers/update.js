const { updateItem, selectItem, updateValues } = require('../helpers/databaseHelpers')
const httpResponse = require('../helpers/httpResponse')


const updateHamburguer = async (req, res) => {
    const item = req.body
    try {
        const findItem = await selectItem(item.id, 'hamburguers')
        if (findItem < 1) return httpResponse.notFound(res, 'Item não encontrado')
        await updateItem(updateValues(item, findItem), 'hamburguers')
        return httpResponse.ok(res)
    } catch (err) {
        httpResponse.internalServerError(res)
    }

}

const updateBebidas = async (req, res) => {
    const item = req.body
    try {
        const findItem = await selectItem(item.id, 'bebidas')
        if (findItem < 1) return httpResponse.notFound(res, 'Item não encontrado')
        await updateItem(updateValues(item, findItem), 'bebidas')
        return httpResponse.ok(res)
    } catch (err) {
        httpResponse.internalServerError(res)
    }

}

const updateCombos = async (req, res) => {
    const item = req.body
    try {
        const findItem = await selectItem(item.id, 'combos')
        if (findItem < 1) return httpResponse.notFound(res, 'Item não encontrado')
        await updateItem(updateValues(item, findItem), 'combos')
        return httpResponse.ok(res)
    } catch (err) {
        httpResponse.internalServerError(res)
    }
}


module.exports = {
    updateHamburguer,
    updateBebidas,
    updateCombos
}