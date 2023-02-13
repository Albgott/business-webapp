import { Navigate, Route, Routes } from "react-router"
import LoginPage from "../pages/LoginPage"

const AuthRoutes = () => {
  return(
    <Routes>
      <Route path="login" element={<LoginPage />}/>
      <Route path="signup" element={<h1>SignIn</h1>}/>
      <Route path="/*" element={<Navigate  to="/auth/login"/>}/>
    </Routes>
  )
}

export default AuthRoutes
