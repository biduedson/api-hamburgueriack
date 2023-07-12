const pool = require('../models/database')

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

const updateItem = async (item, tableName) => {
    try {
        await pool.query(
            `UPDATE ${tableName} set 
            name = $1, description = $2, preco = $3, image = $4 WHERE id = $5`,
            [item.name, item.description, item.preco, item.image, item.id]
        )
    } catch (err) {
        throw err
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

const selectAllItem = async (tableName) => {
    try {
        const { rows } = await pool.query(`SELECT * FROM ${tableName}`)
        return rows
    } catch (err) {
        throw err
    }
}

const updateValues = (item, itemUpdated) => {
    return {
        id: item.id,
        name: item.name || itemUpdated.name,
        description: item.description || itemUpdated.description,
        preco: item.preco || itemUpdated.preco,
        image: item.image || itemUpdated.image,
    }

}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    selectItem,
    selectAllItem,
    updateValues
}