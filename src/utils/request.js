import axios from 'axios'
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'https://gongxintech.cn',
  // 超时
  timeout: 10000
})
export default request