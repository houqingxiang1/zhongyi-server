/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    Body
  } = require('../models/index')
  
  class bodyService {
    async add (data) {
      return Body.create(data)
    }
    
    async delete(id) {
      return Body.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Body.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Body.findAndCountAll()
    }
    async getTotal () {
        return Body.count()
      }
    
    async getDetail (id) {
      return Body.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new bodyService()
  