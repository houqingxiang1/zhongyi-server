/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const auth = require('../../controllers/auth')
const routers = router
  // 登录
  .post('/login', auth.login)
  // 注册
  .post('/register', auth.addAccount)
  .get('/info', auth.getAccountInfo)
  .get('/info/:id', auth.getAccountInfoById)
  .post('/logout', auth.logout)
  .get('/account', auth.getAccountList)
  .get('/account/date', auth.getAccountListByDate)
  .put('/account/:id', auth.updateAccount)
  .delete('/account/:id', auth.deleteAccount)
  
module.exports = routers
