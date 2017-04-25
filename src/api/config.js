import Qs from 'qs'
const config={
	baseURL:'http://119.29.28.209：8080/elove/',
	paramsSerializer:params=>Qs.stringify(params, {arrayFormat: 'brackets'})
}
export default config