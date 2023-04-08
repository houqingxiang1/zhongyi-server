
const {
    Reference
  } = require('../models/index')
  const seq = require('sequelize')
  const Op = seq.Op
  class referencetService {
    async add (data) {
      return Reference.create(data)
    }
    
    async delete(id) {
      return Reference.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Reference.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Reference.findAndCountAll()
    }
    async getTotal () {
        return Reference.count()
      }
    
    async getDetail (id) {
      return Reference.findOne({
        where: {
          id: id
        }
      })
    }
    async getDetailByUnikey (key) {
        return Reference.findOne({
          where: {
            uni_key: key
          }
        })
    }
    async search (keyword) {
        return Reference.findAll({
            where: {
                title: {
                    [Op.like]: `%${keyword}%`
                }
            }
        })
    }
  }
  
  module.exports = new referencetService()
  