const pool = require('../models/database')
const httpResponse = require('../helpers/httpResponse')

async function hamburguerList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM hamburguers')
        const data = result.rows;
        client.release()
        return httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res, 'Erro ao consultar os dados')
    }
}

async function bebidasList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM bebidas')
        const data = result.rows;
        client.release()
        httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res, 'Erro ao consultar os dados')

    }
}

async function combosList(req, res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM combos');
        const data = result.rows;
        client.release()
        httpResponse.ok(res, data)
    } catch (err) {
        return httpResponse.internalServerError(res, 'Erro ao consultar os dados')
    }
}

module.exports = {
    hamburguerList,
    combosList,
    bebidasList
}