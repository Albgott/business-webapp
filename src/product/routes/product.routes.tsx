import { RoutesWithNotFound } from "@/router"
import { Route } from "react-router"
import { NewProductPage, ProductHome } from "@/product/pages"
import { ProductPage } from "../pages/ProductPage"

const ProductRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/*" element={<ProductHome />}/>
      <Route path="/:id" element={<ProductPage />}/>
      <Route path="/new-product" element={<NewProductPage />}/>
    </RoutesWithNotFound>
  )
}

export default ProductRoutes