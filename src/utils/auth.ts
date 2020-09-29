import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const server = axios.create()

server.interceptors.request.use((config: AxiosRequestConfig):AxiosRequestConfig => {
  console.log(config)
  return config
})

server.interceptors.response.use((res:AxiosResponse):AxiosResponse => {
  return res
},(err:any) => {
  console.log(err)
  return Promise.reject(err)
})

interface RequestSchema {
  url: string
  data: any
  method: string
}

// ts中的这里需要注意，我们需要从函数的参数中解构出来几个属性，但是我们还需要对这几个属性做参数类型限制的话，我们需要在参数
// 的对象的后面去做接口的限制，相当于函数的参数，也就是这个对象，先做接口参数限制，然后再解构出其中的属性
export const request = ({url,data,method = 'get'}:RequestSchema) => {
  return new Promise((resolve,reject) => {
    server({
      url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    }as any).then(resp => resolve(resp),err => reject(err))
  })
}