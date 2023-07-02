const jwt = require('jsonwebtoken')
const pool = require('../models/database')
const httpResponse = require('../helpers/httpResponse')
require('dotenv').config()

const userValidation = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) return httpResponse.unauthorized(res)
    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, process.env.JWT_PASS)

        const { rows, rowCount } = await pool.query(
            'SELECT * FROM users WHERE id = $1', [id]
        )

        if (rowCount < 1) return httpResponse.unauthorized(res)
    } catch (err) {

    }
}

module.exports = userValidation