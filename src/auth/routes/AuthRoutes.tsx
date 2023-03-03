import { Navigate, Route} from "react-router"
import { LoginPage, SignupPage } from "@/auth/pages"
import { PublicRoutes, RoutesWithNotFound } from "@/router"

const AuthRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignupPage/>}/>
      <Route path="*" element={<Navigate  to={PublicRoutes.LOGIN}/>}/>
      <Route path="/" element={<Navigate  to={PublicRoutes.LOGIN}/>}/>
    </RoutesWithNotFound>
  )
}

export default AuthRoutes