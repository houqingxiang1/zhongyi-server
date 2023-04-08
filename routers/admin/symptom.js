/**
 * @Description:
 * @author Healthy
 * @date 2021/5/28
 */
const Router = require('koa-router')
const router = new Router()
const symptom = require('../../controllers/symptomController')
const routers = router  
  .post('/symptom', symptom.add)
  .get('/symptom', symptom.getList)
  .get('/symptom/:id', symptom.getDetail)
  .post('/symptom/:id', symptom.update)
  .delete('/symptom/:id', symptom.delete)
  
module.exports = routers
