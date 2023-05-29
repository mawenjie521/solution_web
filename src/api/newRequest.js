import request from '@/utils/request';

// 技术名称查询
export function requireEnterpriseList (query) {
    return request({
      url: '/jeecg-boot/graph/api/requireEnterpriseList',
      method: 'get',
      params: query
    })
  }