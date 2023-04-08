/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    TreatmentCategory
  } = require('../models/index')
  
  class TreatmentCategoryService {
    async add (data) {
      return TreatmentCategory.create(data)
    }
    
    async delete(id) {
      return TreatmentCategory.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return TreatmentCategory.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return TreatmentCategory.findAndCountAll()
    }
    async getTotal () {
        return TreatmentCategory.count()
      }
    
    async getDetail (id) {
      return TreatmentCategory.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new TreatmentCategoryService()
  