import { AppUser } from "@/models"
import jwt from 'jwt-decode'

export const tokenToUser = (token: string): AppUser => {
  const tokenUser: any = jwt(token)

  return ({
    businessId: tokenUser.business_id,
    businessName: tokenUser.business_name,
    accountId: tokenUser.account_id,
    accountName: tokenUser.account_name,
    accountRole: tokenUser.account_role,
    permissions: tokenUser.permissions,
    email: tokenUser.email,
  })
}