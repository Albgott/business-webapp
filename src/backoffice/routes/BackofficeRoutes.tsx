import {  Route } from "react-router"
import { Dashboard } from "@/backoffice/pages"
import { RoutesWithNotFound } from "@/router"


const BackofficeRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/*" element={<Dashboard />}>
        <Route path="lala" element={<h1>lala</h1>}></Route>
      </Route>
    </RoutesWithNotFound>
  )
}

export default BackofficeRoutes