import Qs from 'qs'
const config = {
  baseURL: 'server/',
  transformRequest: [data => Qs.stringify(data)],
  validateStatus: null
}
export default config
