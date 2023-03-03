import { POST, PUT, tokenToUser } from "@/services"
import { CreateBusinessRequest, LoginRequest, LoginResponse, verifyAccountRequest } from "@/auth/models"


export const doLogin = (request: LoginRequest): LoginResponse|void  => {
  POST("/auth/business/login",request)
  .then(res => res.data.json())
  .then(json => (
    {
      token: json.token,
      user: tokenToUser(json.token)
    }
  )).catch(er => {throw new Error(er)})
}

export const createBusiness = (request: CreateBusinessRequest): void => {
  POST("/auth/v1/business",request).catch(er => {throw new Error(er)})
}

export const verifyAccount = (request: verifyAccountRequest): void => {
  PUT(`/auth/accounts/${request.id}/verify-email`).catch(er => {throw new Error(er)})
}