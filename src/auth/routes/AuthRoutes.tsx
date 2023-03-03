import { Navigate, Route} from "react-router"
import { LoginPage, SignupPage, VerificationEmailSendedPage, VerifyMailPage } from "@/auth/pages"
import { PublicRoutes, RoutesWithNotFound } from "@/router"

const AuthRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignupPage/>}/>
      <Route path="*" element={<Navigate  to={PublicRoutes.LOGIN}/>}/>
      <Route path="/" element={<Navigate  to={PublicRoutes.LOGIN}/>}/>
      <Route path="verification-email-sended" element={<VerificationEmailSendedPage/>}/>
      <Route path="verify-email" element={<VerifyMailPage/>}/>
    </RoutesWithNotFound>
  )
}

export default AuthRoutes