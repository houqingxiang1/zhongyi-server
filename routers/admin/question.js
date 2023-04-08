/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const question = require('../../controllers/questionController')
const routers = router  
  .post('/question', question.add)
  .get('/question', question.getList)
//   .get('/question/:id', question.getDetail)
  .post('/question/:id', question.update)
  .delete('/question/:id', question.delete)
  
module.exports = routers
