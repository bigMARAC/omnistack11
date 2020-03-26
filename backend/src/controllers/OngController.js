const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {

    async index(req, resp){
        const ongs = await connection('ongs').select('*')

        return resp.json(ongs)
    },

    async create(req, resp){
        const { name, email, whatsapp, city, uf } = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return resp.json({ id })
    }
}