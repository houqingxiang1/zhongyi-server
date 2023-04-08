/**
 * @Description:
 * @author Healthy
 * 
 */
const bodyService = require("../services/bodyService")
const identificationService = require("../services/identificationService")

module.exports = {
  start: async ctx => {
    // 开始进行辨识
    const data = ctx.request.body
    const {
        count,
        rows
      } = await bodyService.getList()
      const checkedList = data?.list
      const bodyMap = {}
      
      checkedList.forEach(element => {
        const body = rows.find((body) => body.uni_key === element.uni_body_key)
        if(body){
            if(bodyMap[body.uni_key]) bodyMap[body.uni_key] = {...bodyMap[body.uni_key], count: bodyMap[body.uni_key].count+1}
            else bodyMap[body.uni_key] = {
                count: 1,
                title: body.title,
                data: body
            }
        }
      });
      const total = Object.values(bodyMap).length
      const bodies =  Object.values(bodyMap).map((item) => ({
        ...item,
        percent: (item.count/total).toFixed(2)
      }))
      const sorted = bodies.sort((a, b)=>b.count-a.count)
      const calculated = sorted[0]
      const store = {
        user: data.user,
        result: JSON.stringify({bodies, calculated}),
        record: JSON.stringify(data.list),
      }
    try{
        const ret = await identificationService.add(store)
        ctx.body = {
            status: 200,
            msg: '成功',
            data: ret
        }
    }catch(error){
        ctx.body = {
            status: 200,
            msg: '失败',
            data: null
        }
    }
  }, 
  getList: async ctx => {
    const params = ctx.params
    const {
      count,
      rows
    } = await identificationService.getList({user: params.user})
    const productList = []
      for (let i = 0; i < rows.length; i++) {
        const data = rows[i].dataValues 
        productList.push({
            ...data,        
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
  },
  getDetail: async ctx => {
    const params = ctx.params
    const result = await identificationService.getDetail(params.id)
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
