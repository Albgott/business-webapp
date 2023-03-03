import { Navigate, Route } from "react-router"
import { HomePage } from "@/backoffice/pages"
import { PrivateRoutes, RoutesWithNotFound } from "@/router"


const BackofficeRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/" element={<HomePage />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/*" element={<Navigate to={PrivateRoutes.BACKOFFICE}/>}/>
    </RoutesWithNotFound>
  )
}

export default BackofficeRoutes