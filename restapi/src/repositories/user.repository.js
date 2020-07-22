import models from "../models"

export default {
    store: async (data) => await models.User.create(data),

    all: async () => await models.User.findAll(),

    find: async (uuid) => {
        return await models.User.findOne({
            where:{
                uuid: Buffer(uuid, 'hex')
            }
        })
    },

    findById: async(id) => await models.User.findByPk(id),

    findByEmail: async(email) => await models.User.findOne({
        where:{
            email,
        }
    })
}