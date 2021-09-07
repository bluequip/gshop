import axios from "axios";

export function request(config) {
    //1. 创建axios的实例对象
    const instance = axios.create({
        baseUrl: "http://127.0.0.1",
        timeout: 5000
    })
    //2. 设置拦截器
    instance.interceptors.response.use(res=>{
        return res.data
    })
    //3. 发送真正的网络请求
    return instance(config) //返回promise对象
}