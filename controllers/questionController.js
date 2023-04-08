/**
 * @Description:
 * @author Healthy
 * 
 */
const QuestionService = require("../services/questionService")
module.exports = {
  add: async ctx => {
    const data = ctx.request.body
    const { options=""} = data
    const opts = options.split("\n") || []
    try{
        await QuestionService.add({
            ...data,
            options: JSON.stringify(opts)
        })
        ctx.body = {
            status: 200,
            msg: '成功',
            data
        }
    }catch(error){
        ctx.body = {
            status: 200,
            msg: '失败',
            data: null
        }
    }
  },
  delete: async ctx => {
    const params = ctx.params
    const result = await QuestionService.delete(params.id)
    if (result === 1) {
      ctx.body = {
        status: 200,
        msg: '删除成功',
        data: null
      }
    } else {
      ctx.body = {
        status: 'error',
        msg: '删除失败',
        data: null
      }
    }
  },
  update: async ctx => {
    const data = ctx.request.body
    const { options=""} = data
    const opt = options.split("\n") || []
    const obj = {
      ...data,
        options: JSON.stringify(opt)     
    }
    const result = await QuestionService.update(data.id, obj)
    if (result[0] === 1) {
      ctx.body = {
        status: 200,
        msg: '信息修改成功',
        data: opt
      }
    } else {
      ctx.body = {
        status: 'error',
        msg: '信息修改失败',
        data: null
      }
    }
  },
  getList: async ctx => {
    const {
      count,
      rows
    } = await QuestionService.getList()
    const productList = []
      for (let i = 0; i < rows.length; i++) {
        const data = rows[i].dataValues 
        const {options=""} = data
        productList.push({
            ...data,
            options: JSON.parse(options||"[]")
        })
      }
      ctx.body = {
        status: 200,
        msg: '获取成功',
        data: {
          list: productList,
          total: count
        }
      }
  }
  
}
