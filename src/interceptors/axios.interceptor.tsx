import client from "@/services/AxiosApiCLient";
import { getValidationError, SnackbarUtilities } from "@/utilities";
import { InternalAxiosRequestConfig } from "axios";

export const AxiosInterceptor = () => {

  const token = localStorage.getItem("token")

  const updateHeaders = (request: InternalAxiosRequestConfig) => {
    if(!!token){
      request.headers['Authorization'] = token
    }
    return request
  }

  client.interceptors.request.use(
    request => {
      return updateHeaders(request)
    }
  )

  client.interceptors.response.use(
    (response) => {
      SnackbarUtilities.sucess(getValidationError("SUCESS"))
      return response
    },
    (error) => {
      SnackbarUtilities.error(getValidationError("GENERIC"))
      return Promise.reject(error)
    }
  )
}