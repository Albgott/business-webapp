import { RootState } from "@/redux/store"
import { PrivateRoutes, PublicRoutes } from "@/router"
import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

interface Props {
  inverted?: boolean
}

const AuthGuard: React.FC<Props> = ({inverted = false}) => {
  const userState = useSelector((store: RootState) => store.user)
  if(inverted){
    return !userState.isLogged? <Outlet /> : <Navigate replace to={PrivateRoutes.PRODUCTS} />
  }
  return userState.isLogged? <Outlet /> : <Navigate replace to={PublicRoutes.AUTH} />
}

export default AuthGuard