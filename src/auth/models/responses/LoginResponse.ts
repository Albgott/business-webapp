import { AppUser } from "@/models"

export interface LoginResponse {
  token: string
  user: AppUser
}