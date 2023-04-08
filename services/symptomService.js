/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    Symptom
  } = require('../models/index')
  
  class symptomService {
    async add (data) {
      return Symptom.create(data)
    }
    
    async delete(id) {
      return Symptom.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Symptom.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Symptom.findAndCountAll()
    }
    async getTotal () {
        return Symptom.count()
      }
    
    async getDetail (id) {
      return Symptom.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new symptomService()
  