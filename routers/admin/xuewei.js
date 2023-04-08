
const Router = require('koa-router')
const router = new Router()
const xueweiController = require('../../controllers/xueweiController')
const routers = router  
  .post('/xuewei', xueweiController.add)
  .get('/xuewei', xueweiController.getList)
  .get('/xuewei/:id', xueweiController.getDetail)
  .post('/xuewei/:id', xueweiController.update)
  .delete('/xuewei/:id', xueweiController.delete)
  
module.exports = routers
