import {  Route } from "react-router"
import { AddCategoryPage, AddProductPage, Dashboard, ListProductsPage, UserDetailsPage } from "@/backoffice/pages"
import { PrivateRoutes, RoutesWithNotFound } from "@/router"


const BackofficeRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/*" element={<Dashboard />}>
        <Route path={PrivateRoutes.ADD_CATEGORY} element={<AddCategoryPage />}></Route>
        <Route path={PrivateRoutes.ADD_PRODUCT} element={<AddProductPage />}></Route>
        <Route path={PrivateRoutes.LIST_PRODUCTS}element={<ListProductsPage />}></Route>
        <Route path={PrivateRoutes.SHOW_USER} element={<UserDetailsPage />}></Route>
      </Route>
    </RoutesWithNotFound>
  )
}

export default BackofficeRoutes