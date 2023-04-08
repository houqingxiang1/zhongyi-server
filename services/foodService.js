
const {
    Food
  } = require('../models/index')
  const seq = require('sequelize')
  const Op = seq.Op
  class treatmentService {
    async add (data) {
      return Food.create(data)
    }
    
    async delete(id) {
      return Food.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Food.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Food.findAndCountAll()
    }
    async getTotal () {
        return Food.count()
      }
    
    async getDetail (id) {
      return Food.findOne({
        where: {
          id: id
        }
      })
    }  
    async search (keyword) {
        return Food.findAll({
            where: {
              title: {
                [Op.like]: `%${keyword}%`
              }
            }
        })
    }  
  }
  
  module.exports = new treatmentService()
  