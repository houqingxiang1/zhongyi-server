/**
 * @Description:
 * @author Healthy
 */
const bodyService = require("../services/bodyService")
module.exports = {
  add: async ctx => {
    const data = ctx.request.body
    const {nursing_way=""} = data
    const nursing = nursing_way.split("\n") || []
    const obj = {...data, nursing_way: JSON.stringify(nursing),}
    try{
        await bodyService.add(obj)
        ctx.body = {
            status: 200,
            msg: '成功',
            data: obj
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
    const result = await bodyService.delete(params.id)
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
    const {nursing_way=""} = data
    const nursing = nursing_way.split("\n") || []
    const obj = {
      ...data,
      nursing_way: JSON.stringify(nursing)   
    }
    const result = await bodyService.update(data.id, obj)
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
    } = await bodyService.getList()
    if (count > 0) {
      const productList = []
      for (let i = 0; i < rows.length; i++) {
        const data = rows[i].dataValues 
        const {nursing_way} = data
        productList.push({
            ...data,
            nursing_way: JSON.parse(nursing_way||"[]")            
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
  },
  getDetail: async ctx => {
    const productId = ctx.url.substring(22)
    const result = await bodyService.getDetail(productId)
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
