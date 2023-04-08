/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const jingluo = require('../../controllers/jingluoController')
const routers = router  
  .post('/jingluo', jingluo.add)
  .get('/jingluo', jingluo.getList)
  .get('/jingluo/:id', jingluo.getDetail)
  .post('/jingluo/:id', jingluo.update)
  .delete('/jingluo/:id', jingluo.delete)
  
module.exports = routers
