import config from './config'
import url from './url'
import axios from 'axios'
const Vaxios=axios.create(config)
export default {
	all:iterable=>axios.all(iterable),
	spread:callback=>axios.spread(callback),
	userLoginForPassword:(Phone,Password)=>Vaxios.post(url.userLogin,{Phone,Password}),
	userLoginForYzm:(Phone,reg_yzm)=>Vaxios.post(url.userLogin,{Phone,reg_yzm}),
	userRegister:(Phone,reg_yzm)=>Vaxios.post(url.userRegister,{Phone,reg_yzm}),
	postsSend:(Title,postType,content)=>Vaxios.post(url.postsSend,{Title,postType,content}),
	postsListPage:currentPage=>Vaxios.post(url.postsListpage,{currentPage}),
	postsListType:(currentPage,postTypeid)=>Vaxios.post(url.postsListpage,{currentPage,postTypeid}),
	postsReadPost:pid=>Vaxios.post(url.postsReadPost,{pid}),
	postsImprove:(Username,Nickname,Photourl,Sex,Birthday)=>Vaxios.post(url.postsImprove,{Username,Nickname,Photourl,Sex,Birthday})
}