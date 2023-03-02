import AuthRoutes from "@/auth/routes/AuthRoutes"
import { BackofficeRoutes } from "@/backoffice/routes"
import { Navigate, Route, Routes } from "react-router"
import { AppRoutes } from "./AppRoutes"



const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.AUTH} element={<AuthRoutes/>}/>
      <Route path={AppRoutes.HOME} element={<BackofficeRoutes/>}/>
      <Route path="*" element={<Navigate to={AppRoutes.AUTH}/>}/>
    </Routes>
  )
}

export default AppRouter