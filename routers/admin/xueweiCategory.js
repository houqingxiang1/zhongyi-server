/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const xueweiCategoryController = require('../../controllers/xueweiCategoryController')
const routers = router  
  .post('/xueweiCategory', xueweiCategoryController.add)
  .get('/xueweiCategory', xueweiCategoryController.getList)
  .get('/xueweiCategory/:id', xueweiCategoryController.getDetail)
  .post('/xueweiCategory/:id', xueweiCategoryController.update)
  .delete('/xueweiCategory/:id', xueweiCategoryController.delete)
  
module.exports = routers
