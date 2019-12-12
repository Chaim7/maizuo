import axios from 'axios'
const getbannerList = (params) => {
  return axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=1388702', {
    params,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15760321834273492459712","bc":"440300"}',
      'X-Host': 'mall.cfg.common-banner'
    }
  })
}
export {
  getbannerList
}
