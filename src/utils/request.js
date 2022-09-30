//axios配置文件
import axios from 'axios'

//声明axios实例
const instance = axios.create({
    //请求的基础路径
    baseURL : './datas/',
    //超时时间 单位毫秒
    timeout : 10000
})

//封装axios请求--get
// /login?name=123&pass=123
export const get = (url,params={})=>{
    //Promise对象代表未来将要发生的事情，用来传递异步操作信息
    return new Promise((resolve,reject)=>{
        //response响应
        instance.get(url,{params}).then((response)=>{
            resolve(response.data)
        },err=>{
            reject(err)
        })
    })
}

//此处封装post请求
export const post = (url,data={}) => {

    return new Promise((resolve,reject)=>{
        //post请求要设置请求头
        instance.post(url,data,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            resolve(response.data)
        },err=>{
            reject(err)
        })
    })
}
// 此处封装patch请求 
export const patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      instance.patch(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
          resolve(response.data)
        }).catch(err => {
        reject(err)
      })
    })
  }