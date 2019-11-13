import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/cmdb/online/api/pagination?role=module&status=4',
    method: 'get',
    params: query
  })
}

export function fetchList_shanghai(query) {
  return request({
    url: '/cmdb/shanghai/app/getApp',
    method: 'get',
    params: query
  })
}