const pool = require('../models/database')
const httpResponse = require('./httpResponse')

const createItem = async (item, tableName) => {

    try {
        const { rows } = await pool.query(
            `INSERT INTO ${tableName} (name, description, preco, image )
        VALUES ($1, $2, $3, $4) RETURNING *`,
            [item.name, item.description, item.preco, item.image]
        )
        return rows[0]

    } catch (err) {
        throw err
    }

}



const updateItem = async (req, res) => {
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

const deleteItem = async (id, tableName) => {
    try {
        await pool.query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
    } catch (err) {
        throw err
    }

}


const selectItem = async (id, tableName) => {
    try {
        const { rows } = await pool.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        return rows[0]
    } catch (err) {
        throw err
    }

}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    selectItem
}