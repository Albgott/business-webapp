import { RootState } from "@/redux/store"
import { PublicRoutes } from "@/router"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const AuthGuard = () => {
  const userState = useSelector((store: RootState) => store.user)
  return userState.isLogged? <Outlet /> : <Navigate replace to={PublicRoutes.AUTH} />
}

export default AuthGuard