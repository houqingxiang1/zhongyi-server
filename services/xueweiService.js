
const {
    Xuewei
  } = require('../models/index')
  const seq = require('sequelize')
  const Op = seq.Op
  class treatmentService {
    async add (data) {
      return Xuewei.create(data)
    }
    
    async delete(id) {
      return Xuewei.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Xuewei.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Xuewei.findAndCountAll()
    }
    async getTotal () {
        return Xuewei.count()
      }
    
    async getDetail (id) {
      return Xuewei.findOne({
        where: {
          id: id
        }
      })
    }
    async getListByCategory (categoryKey) {
        return Xuewei.findAndCountAll({
          where: {
            category_key: categoryKey
          }
        })
      }
    async search (keyword) {
        return Xuewei.findAll({
            where: {
              title: {
                [Op.like]: `%${keyword}%`
              }
            }
        })
    }
  }
  
  module.exports = new treatmentService()
  