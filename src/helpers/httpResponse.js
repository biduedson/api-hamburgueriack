const httpResponse = {
    unauthorized: (res) => {
        res.status(401).json({ mensagem: "Não autorizado" })
    },

    internalServerError: (res) => {
        res.status(500).json({ error: 'Erro interno do servidor' })
    },

    badRequest: (res, message) => {
        return res.status(400).json({ mensagem: `${message}` })
    },

    ok: (res, data) => {
        res.status(200).json(data)
    }

}

module.exports = httpResponse