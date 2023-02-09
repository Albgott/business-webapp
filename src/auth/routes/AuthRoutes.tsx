import { Navigate, Route, Routes } from "react-router"

const AuthRoutes = () => {
  return(
    <Routes>
      <Route path="login" element={<h1>Login</h1>}/>
      <Route path="signup" element={<h1>SignIn</h1>}/>
      <Route path="/*" element={<Navigate  to="/auth/login"/>}/>
    </Routes>
  )
}

export default AuthRoutes
