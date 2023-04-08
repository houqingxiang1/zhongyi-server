/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const reference = require('../../controllers/referenceController')
const routers = router  
  .post('/reference', reference.add)
  .get('/reference', reference.getList)
  .get('/reference/:id', reference.getDetail)
  .post('/reference/:id', reference.update)
  .delete('/reference/:id', reference.delete)
  
module.exports = routers
