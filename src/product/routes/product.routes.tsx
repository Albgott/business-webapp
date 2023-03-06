import { RoutesWithNotFound } from "@/router"
import { Route } from "react-router"
import { ProductHome } from "@/product/pages"

const ProductRoutes = () => {
  return(
    <RoutesWithNotFound>
      <Route path="/*" element={<ProductHome />}/>
    </RoutesWithNotFound>
  )
}

export default ProductRoutes