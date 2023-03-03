import { Navigate, Route } from "react-router"
import { Dashboard } from "@/backoffice/pages"
import { PrivateRoutes, RoutesWithNotFound } from "@/router"


const BackofficeRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/home" element={<Dashboard />}/>
      <Route path="/*" element={<Navigate to={PrivateRoutes.BACKOFFICE}/>}/>
    </RoutesWithNotFound>
  )
}

export default BackofficeRoutes