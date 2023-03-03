import { ApiRoutes } from "@/models/ApiRoutes"
import axios from "axios"

const instance = axios.create({
  baseURL: ApiRoutes.BASE,
  
})

export const GET = (url: string, params = {}, token = "") => {
  const headers = getHeaders(token)
  return instance.get(url,{
    params: params,
    headers: headers
  })
}

export const POST = (url: string, body = {}, token = "") => {
  const headers = getHeaders(token)
  return instance.post(url,{
    data: body,
    headers: headers
  })
}

export const DELETE = (url: string, body = {}, token = "") => {
  const headers = getHeaders(token)
  return instance.delete(url,{
    data: body,
    headers: headers
  })
}

export const PUT = (url: string, body = {}, token = "") => {
  const headers = getHeaders(token)
  return instance.put(url,{
    data: body,
    headers: headers
  })
}

const getHeaders = (token: string) => {
  if(!!token){
    return {}
  }
  return {'Authorization': token}
}