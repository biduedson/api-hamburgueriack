const pool = require('../models/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const httpResponse = require('../helpers/httpResponse')
require('dotenv').config()

const userRegister = async (req, res) => {
    const { user_name, email, senha } = req.body

    try {
        const passwordDecrypt = bcrypt.hashSync(senha, 10)

        const newUser = await pool.query(
            `INSERT INTO users (user_name, email, senha) VALUES
         ($1, $2, $3) returning *`, [user_name, email, passwordDecrypt]
        )

        res.status(201).json(newUser.rows[0])

    } catch (err) {
        httpResponse.internalServerWError(res)
    }
}

const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const user = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        )

        if (user.rowCount < 1) return httpResponse.badRequest(res, 'Email ou senha invalida')

        const passwordValidate = await bcrypt.compare(senha, user.rows[0].senha)

        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_PASS, {
            expiresIn: '8h'
        })

        if (!passwordValidate) return httpResponse.badRequest(res, 'Email ou senha invalida')

        const { senha: _, ...userLogged } = user.rows[0]

        return res.json({ user: userLogged, token })

    } catch (err) {
        httpResponse.internalServerWError(res)
    }
}

module.exports = {
    login,
    userRegister
}