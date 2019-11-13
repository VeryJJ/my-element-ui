import request from '@/utils/request'

export function getOrderDetail(params) {
  return request({
    url: '/mock/order/detail/'+params,
    method: 'get'
  })
}


// https://yapi.cai-inc.com/mock/1117/order/detail/123