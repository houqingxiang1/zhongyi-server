/**
 * @Description:
 * @author Healthy
 * 
 */
const {
    Question
  } = require('../models/index')
  
  class questionService {
    async add (data) {
      return Question.create(data)
    }
    
    async delete(id) {
      return Question.destroy({
        where: {
          id: id
        }
      })
    }
    
    async update (id, value) {
      return Question.update(value, {
        where: {
          id: id
        }
      })
    }
    
    async getList () {
      return Question.findAndCountAll()
    }
    async getTotal () {
      return Question.count()
    }
    
    async getDetail (id) {
      return Question.findOne({
        where: {
          id: id
        }
      })
    }
  }
  
  module.exports = new questionService()
  