import request from '@/utils/request'
// 首页查询接口
export function dashboard () {
  return request({
    url: '/jeecg-boot/graph/api/dashboard',
    method: 'get',
  })
}
// 首页查询地图企业列表
export function map () {
  return request({
    url: '/jeecg-boot/graph/api/map',
    method: 'get',
  })
}
// 查询企业
export function enterprise (query) {
  return request({
    url: '/jeecg-boot/graph/api/enterprise',
    method: 'get',
    params: query
  })
}
// 产品查询
export function production (query) {
  return request({
    url: '/jeecg-boot/graph/api/production',
    method: 'get',
    params: query
  })
}
// 产品查询子页面
export function productionChild (query) {
  return request({
    url: '/jeecg-boot/graph/api/production/child',
    method: 'get',
    params: query
  })
}
// 产品名称查询
export function productionName (query) {
  return request({
    url: '/jeecg-boot/graph/api/production/query',
    method: 'get',
    params: query
  })
}

// 场景需求查询
export function solution (query) {
  return request({
    url: '/jeecg-boot/graph/api/solution',
    method: 'get',
    params: query
  })
}
// 场景需求子页面
export function solutionChild (query) {
  return request({
    url: '/jeecg-boot/graph/api/solution/child',
    method: 'get',
    params: query
  })
}
// 场景名称查询
export function solutionName (query) {
  return request({
    url: '/jeecg-boot/graph/api/solution/query',
    method: 'get',
    params: query
  })
}
// 技术查询
export function tech (query) {
  return request({
    url: '/jeecg-boot/graph/api/tech',
    method: 'get',
    params: query
  })
}
// 技术查询子页面
export function techChild (query) {
  return request({
    url: '/jeecg-boot/graph/api/tech/child',
    method: 'get',
    params: query
  })
}
// 技术名称查询
export function techName (query) {
  return request({
    url: '/jeecg-boot/graph/api/tech/query',
    method: 'get',
    params: query
  })
}
// export function hatchList (params) {
//   return request({
//     url: '/api/hatch/case/list',
//     method: 'post',
//     data: params
//   })
// }
// export function incubatorList (params) {
//   return request({
//     url: '/api/incubator/case/list',
//     method: 'post',
//     data: params
//   })
// }
// export function incubatorAdd (params) {
//   return request({
//     url: '/api/incubator/form/add/information',
//     method: 'post',
//     data: params
//   })
// }
// export function activityList (params) {
//   return request({
//     url: '/api/cms/activity/list',
//     method: 'post',
//     data: params
//   })
// }
// export function policyList (params) {
//   return request({
//     url: '/api/cms/policy/list',
//     method: 'post',
//     data: params
//   })
// }
// // 查询机构详情
// export function incubatorDetail (params) {
//   return request({
//     url: '/api/incubator/case/' + params,
//     method: 'get',
//   })
// }
// // 查询企业详情
// export function caseDetail (params) {
//   return request({
//     url: '/api/hatch/case/' + params,
//     method: 'get',
//   })
// }
// // 查询政策详情
// export function policyDetail (params) {
//   return request({
//     url: '/api/cms/policy/' + params,
//     method: 'get',
//   })
// }
// // 查询活动详情
// export function activityDetail (params) {
//   return request({
//     url: '/api/cms/activity/' + params,
//     method: 'get',
//   })
// }
// // 查询字典
// export function incubator (params) {
//   return request({
//     url: 'api/incubator/form/type/' + params,
//     method: 'get',
//   })
// }
// export function count () {
//   return request({
//     url: '/api/count',
//     method: 'get',
//   })
// }
// export function getFormCode () {
//   return request({
//     url: '/api/captchaImage?t=' + new Date().getTime(),
//     headers: {
//       isToken: false
//     },
//     method: 'get',
//     timeout: 20000
//   })
// }
