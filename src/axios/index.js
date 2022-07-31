import axios from 'axios';

// 配置axios
// 配置请求根路径
axios.defaults.baseURL = 'http://119.45.224.208:8888/api/private/v1/'
// 配置请求拦截器
axios.interceptors.request.use(config => {
    // 这一步是配置请求头，可以使得没有token登陆授权的用户请求失败;设置后服务端就
    // 可以根据请求头来判断是否要进行响应了
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

export default axios