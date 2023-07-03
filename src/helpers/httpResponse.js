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
    },

    created: (res, newIten) => {
        res.status(201).json(newIten)
    },

    noContent: (res, message) => {
        res.status(204).send()
    },

    notFound: (res, message) => {
        res.status(404).json({ mensagem: message })
    }

}

module.exports = httpResponse