import { BackofficeRoutes } from "@/backoffice/routes"
import { Navigate, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import {RoutesWithNotFound, PrivateRoutes, PublicRoutes} from "@/router"
import AuthRoutes from "@/auth/routes/AuthRoutes"
import { AuthGuard } from "@/guards"




const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
      <Route element={<AuthGuard inverted/>}>
        <Route path="/" element={<Navigate to={PrivateRoutes.BACKOFFICE}/>} />
        <Route path={`${PublicRoutes.AUTH}/*`} element={<AuthRoutes />}/>
      </Route>

        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.BACKOFFICE}/*`} element={<BackofficeRoutes />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export default AppRouter