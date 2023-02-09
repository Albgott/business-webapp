import { Navigate, Route, Routes } from "react-router"
import AuthRoutes from "../auth/routes/AuthRoutes"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />}/>
      <Route path="*" element={<Navigate to="/auth"/>}/>
    </Routes>
  )
}

export default AppRouter