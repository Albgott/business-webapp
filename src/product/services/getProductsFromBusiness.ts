import client from "@/services/AxiosApiCLient"
import { Product } from "../models"

export interface getProductFromBusinessRequest {
  businessId: string
}

export const getProductFromBusiness = ({businessId}:getProductFromBusinessRequest) => {
  return client.get(`/catalogue/products/business/${businessId}`)
}

export default getProductFromBusiness