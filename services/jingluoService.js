
const {
    Jingluo
  } = require('../models/index')
  const seq = require('sequelize')
  const Op = seq.Op
  class JingluoService {
    async add (data) {
      return Jingluo.create(data)
    }
    
    async delete(id) {
      return Jingluo.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Jingluo.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Jingluo.findAndCountAll()
    }
    async getTotal () {
        return Jingluo.count()
      }
    
    async getDetail (id) {
      return Jingluo.findOne({
        where: {
          id: id
        }
      })
    }
    async search (keyword) {
        return Jingluo.findAll({
            where: {
              title: {
                [Op.like]: `%${keyword}%`
              }
            }
          })
    }
  }
  
  module.exports = new JingluoService()
  