/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const treatmentCategory = require('../../controllers/treatmentCategoryController')
const routers = router  
  .post('/treatmentCategory', treatmentCategory.add)
  .get('/treatmentCategory', treatmentCategory.getList)
  .get('/treatmentCategory/:id', treatmentCategory.getDetail)
  .post('/treatmentCategory/:id', treatmentCategory.update)
  .delete('/treatmentCategory/:id', treatmentCategory.delete)
  
module.exports = routers
