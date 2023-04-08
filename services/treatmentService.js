
const {
    Treatment
  } = require('../models/index')
  const seq = require('sequelize')
  const Op = seq.Op
  class treatmentService {
    async add (data) {
      return Treatment.create(data)
    }
    
    async delete(id) {
      return Treatment.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Treatment.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Treatment.findAndCountAll()
    }
    async getListByCategory (category) {
        return Treatment.findAndCountAll({
            where: {
                category_key: category
              }
        })
    }
    async getTotal () {
        return Treatment.count()
      }
    
    async getDetail (id) {
      return Treatment.findOne({
        where: {
          id: id
        }
      })
    }
    async search (keyword) {
        return Treatment.findAll({
            where: {
              title: {
                [Op.like]: `%${keyword}%`
              }
            }
        })
    }
  }
  
  module.exports = new treatmentService()
  