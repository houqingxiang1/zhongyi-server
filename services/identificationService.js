/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    Identification
  } = require('../models/index')
  
  class questionService {
    async add (data) {
      return Identification.create(data)
    }
    
    async delete(id) {
      return Identification.destroy({
        where: {
          id: id
        }
      })
    }
    
    
    
    async getList (query) {
      return Identification.findAndCountAll({
            where: {
                user: query.user
            }
        })
    }
    async getTotal () {
      return Identification.count()
    }
    
    async getDetail (id) {
      return Identification.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new questionService()
  