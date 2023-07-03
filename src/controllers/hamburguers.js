const pool = require('../models/database')
const httpResponse = require('../helpers/httpResponse')

const addHamburguer = async (req, res) => {
    const { name, description, preco, image } = req.body

    try {
        const { rows } = await pool.query(
            `INSERT INTO hamburguers (name, description, preco, image )
        VALUES ($1, $2, $3, $4) RETURNING *`,
            [hamburguer_name, description, preco, image]
        )
        return httpResponse.created(res, 'Item inserido com sucesso.', rows)
    } catch (err) {
        httpResponse.internalServerError(res)
    }
}

const addbebidas = async (req, res) => {
    const { name, description, preco, image } = req.body

    try {
        const { rows } = await pool.query(
            `INSERT INTO bebidas (name, description, preco, image )
        VALUES ($1, $2, $3, $4) RETURNING *`,
            [hamburguer_name, description, preco, image]
        )
        return httpResponse.created(res, 'Item inserido com sucesso.', rows)
    } catch (err) {
        httpResponse.internalServerError(res)
    }
}