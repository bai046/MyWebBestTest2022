import axios from 'axios'

export function requst(config){
    // 1.创建axios实例
    const instance = axios.create({
        // baseURL:'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2，拦截器

    //3，发送真正网络请求
    return instance(config)
}