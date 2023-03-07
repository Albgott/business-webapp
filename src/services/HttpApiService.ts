import client from "./AxiosApiCLient"

const instance = client

export const GET = (url: string, params = {}) => {
  return instance.get(url,{
    params: params,
  })
}

export const POST = (url: string, body = {}) => {
  return instance.post(url,body)
}

export const DELETE = (url: string, body = {}) => {
  return instance.delete(url,{
    data: body
  })
}

export const PUT = (url: string, body = {}) => {
  return instance.put(url,body)
}
