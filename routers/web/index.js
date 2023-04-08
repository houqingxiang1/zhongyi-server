const Router = require('koa-router')
const dashboardController = require('../../controllers/dashboardController')
const question = require('../../controllers/questionController')
const identification = require('../../controllers/identificationController')
const reference = require('../../controllers/referenceController')
const treatmentCategory = require('../../controllers/treatmentCategoryController')
const treatment = require('../../controllers/treatmentController')
const jingluo = require('../../controllers/jingluoController')
const xueweiCategory = require('../../controllers/xueweiCategoryController')
const xuewei = require('../../controllers/xueweiController')
const food = require('../../controllers/foodController')
const router = new Router()
const user = require('./user')
const routersQuestion = router 
  .get('/question', question.getList)
const routersIdentification = router 
  .post('/identification', identification.start)
  .get('/getIdentificationList/:user', identification.getList)
  .get('/identification/:id', identification.getDetail)

const routersReference = router 
  .get('/reference/:id', reference.getDetail)
  .get('/reference', reference.getList)
const routerTreatmentCategory = router
  .get('/treatmentCategoryList', treatmentCategory.getList)
const routerTreatment = router
  .get('/treatmentList/:categoryKey', treatment.getListByCategory)  
  .get('/treatment/:id', treatment.getDetail)  

const routerJingluo = router
  .get('/jingluo', jingluo.getList)  
  .get('/jingluo/:id', jingluo.getDetail)  

  const routerFood = router
  .get('/food', food.getList)  
  .get('/food/:id', food.getDetail)  

const routerXueweiCategory = router
  .get('/xueweiCategoryList', xueweiCategory.getList)
const routerXuewei = router
  .get('/xueweiList/:categoryKey', xuewei.getListByCategory)  
  .get('/xuewei/:id', xuewei.getDetail)  
const routerDashboard = router
  .post('/search', dashboardController.search)
router.use(user.routes(), user.allowedMethods())
router.use(routersQuestion.routes(), user.allowedMethods())
router.use(routersIdentification.routes(), user.allowedMethods())
router.use(routersReference.routes(), user.allowedMethods())
router.use(routerTreatmentCategory.routes(), user.allowedMethods())
router.use(routerTreatment.routes(), user.allowedMethods())
router.use(routerJingluo.routes(), user.allowedMethods())
router.use(routerXueweiCategory.routes(), user.allowedMethods())
router.use(routerXuewei.routes(), user.allowedMethods())
router.use(routerFood.routes(), user.allowedMethods())
router.use(routerDashboard.routes(), user.allowedMethods())
module.exports = router
