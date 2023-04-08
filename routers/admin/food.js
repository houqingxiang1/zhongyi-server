
const Router = require('koa-router')
const router = new Router()
const foodController = require('../../controllers/foodController')
const routers = router  
  .post('/food', foodController.add)
  .get('/food', foodController.getList)
  .get('/food/:id', foodController.getDetail)
  .post('/food/:id', foodController.update)
  .delete('/food/:id', foodController.delete)
  
module.exports = routers
