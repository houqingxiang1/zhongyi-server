/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const treatment = require('../../controllers/treatmentController')
const routers = router  
  .post('/treatment', treatment.add)
  .get('/treatment', treatment.getList)
  .get('/treatment/:id', treatment.getDetail)
  .post('/treatment/:id', treatment.update)
  .delete('/treatment/:id', treatment.delete)
  
module.exports = routers
