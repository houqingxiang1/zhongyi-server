/**
 * @Description:
 * @author Healthy
 * 
 */
const JingluoService = require("../services/jingluoService")
module.exports = {
  add: async ctx => {
    const data = ctx.request.body
    try{
        await JingluoService.add(data)
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
    const result = await JingluoService.delete(params.id)
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
    
    const result = await JingluoService.update(data.id, data)
    if (result[0] === 1) {
      ctx.body = {
        status: 200,
        msg: '信息修改成功',
        data: null
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
    } = await JingluoService.getList()
    const productList = []
      for (let i = 0; i < rows.length; i++) {
        const data = rows[i].dataValues        
        productList.push(data)
      }
      ctx.body = {
        status: 200,
        msg: '获取成功',
        data: {
          list: productList,
          total: count
        }
      }
  },
  getDetail: async ctx => {
    const params = ctx.params
    const result = await JingluoService.getDetail(params.id)
    if (result) {
      ctx.body = {
        status: 200,
        msg: '获取信息成功',
        data: result.dataValues
      }
    } else {
      ctx.body = {
        status: 'error',
        msg: '获取信息失败',
        data: null
      }
    }
  }
}
