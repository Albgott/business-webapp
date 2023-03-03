import { POST, PUT, tokenToUser } from "@/services"
import { CreateBusinessRequest, LoginRequest, LoginResponse, verifyAccountRequest } from "@/auth/models"


export const doLogin = async (request: LoginRequest)  => {
  return POST("/auth/business/login",request)
  .then(res => res.data.json())
  .then(json => (
    {
      token: json.token,
      user: tokenToUser(json.token)
    }
  )).catch(er => {throw new Error(er)})
}

export const createBusiness = async (request: CreateBusinessRequest) => {
  await POST("/auth/v1/business",request).catch(er => {throw new Error(er)})
}

export const verifyAccount = async(request: verifyAccountRequest) => {
  if(request.token == null || request.token.length == 0) throw new Error()
  await PUT(`/auth/accounts/${request.token}/verify-email`).catch(er => {throw new Error(er)})
}