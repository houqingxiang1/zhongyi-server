/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const body = require('../../controllers/bodyController')
const routers = router  
  .post('/body', body.add)
  .get('/body', body.getList)
  .get('/body/:id', body.getDetail)
  .post('/body/:id', body.update)
  .delete('/body/:id', body.delete)
  
module.exports = routers
