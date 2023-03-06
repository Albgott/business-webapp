import { Navigate, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import {RoutesWithNotFound, PrivateRoutes, PublicRoutes} from "@/router"
import AuthRoutes from "@/auth/routes/AuthRoutes"
import { AuthGuard } from "@/guards"
import ProductRoutes from "@/product/routes/product.routes"
import DashboardLayout from "@/layouts/Dashboard/Dashboard.layout"




const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
      <Route element={<AuthGuard inverted/>}>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRODUCTS}/>} />
        <Route path={`${PublicRoutes.AUTH}/*`} element={<AuthRoutes />}/>
      </Route>

        <Route element={<AuthGuard />}>
          <Route element={<DashboardLayout/>} >
            <Route path={`${PrivateRoutes.PRODUCTS}/*`} element={<ProductRoutes/>} />
            <Route path="*" element={<Navigate to={PrivateRoutes.PRODUCTS}/>} />
          </Route>
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export default AppRouter