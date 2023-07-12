const pool = require('../models/database')
const httpResponse = require('../helpers/httpResponse')
const { selectAllItem } = require('../helpers/databaseHelpers')

async function hamburguerList(req, res) {

    try {
        const data = await selectAllItem('hamburguers');
        return httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res)
    }
}

async function bebidasList(req, res) {
    try {
        const data = await selectAllItem('bebidas');
        return httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res)
    }
}

async function combosList(req, res) {
    try {
        const data = await selectAllItem('combos');
        return httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res)
    }
}

module.exports = {
    hamburguerList,
    combosList,
    bebidasList
}