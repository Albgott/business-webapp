import { PublicRoutes } from "@/router"
import { Navigate, Outlet } from "react-router"

const AuthGuard = () => {
  const userLogued = false
  return userLogued? <Outlet /> : <Navigate replace to={PublicRoutes.AUTH} />
}

export default AuthGuard