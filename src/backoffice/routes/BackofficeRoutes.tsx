import { Route, Routes } from "react-router"
import { HomePage } from "@/backoffice/pages"


const BackofficeRoutes = () => {
  return(
    <Routes>
      <Route path="/*" element={<HomePage />}/>
    </Routes>
  )
}

export default BackofficeRoutes