
const QuestionService = require("../services/questionService")
const BodyService = require("../services/bodyService")
const SymptomService = require("../services/symptomService")
const TreatmentService = require("../services/treatmentService")
const JingluoService = require("../services/jingluoService")
const XueweiService = require("../services/xueweiService")
const ReferenceService = require('../services/referenceService')
const foodService = require('../services/foodService')
module.exports = {
  
  getTotal: async ctx => {
    const questionTotal = await QuestionService.getTotal()
    const bodyTotal =  await BodyService.getTotal()
     const symptomTotal = await SymptomService.getTotal()
      const treatmentTotal = await TreatmentService.getTotal()
      ctx.body = {
        status: 200,
        msg: '获取成功',
        data: {
            questionTotal,
            bodyTotal,
            symptomTotal,
            treatmentTotal
        }
      
    }
  },
  search: async ctx => {
    const data = ctx.request.body
    const jingluo = await JingluoService.search(data.keyword)
    const xuewei = await XueweiService.search(data.keyword)
    const reference =await ReferenceService.search(data.keyword)
    const treatment = await TreatmentService.search(data.keyword)
    const food = await foodService.search(data.keyword)
      ctx.body = {
        status: 200,
        msg: '获取成功',
        data: {
            jingluo,
            xuewei,
            reference,
            treatment,
            food
        }
      
    }
  },
}