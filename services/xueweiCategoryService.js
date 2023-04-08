/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    XueweiCategory
  } = require('../models/index')
  
  class XueweiCategoryService {
    async add (data) {
      return XueweiCategory.create(data)
    }
    
    async delete(id) {
      return XueweiCategory.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return XueweiCategory.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return XueweiCategory.findAndCountAll()
    }
    async getTotal () {
        return XueweiCategory.count()
      }
    
    async getDetail (id) {
      return XueweiCategory.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new XueweiCategoryService()
  