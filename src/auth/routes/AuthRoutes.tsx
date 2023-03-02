import { Navigate, Route, Routes } from "react-router"
import { LoginPage, SignupPage } from "@/auth/pages"

const AuthRoutes = () => {
  return(
    <Routes>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignupPage/>}/>
      <Route path="/*" element={<Navigate  to="/auth/login"/>}/>
    </Routes>
  )
}

export default AuthRoutes