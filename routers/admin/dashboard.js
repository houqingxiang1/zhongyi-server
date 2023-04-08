/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const dashboard = require('../../controllers/dashboardController')
const routers = router.get('/dashboard', dashboard.getTotal)
  
module.exports = routers
