import { usePrincipal } from "@/hooks"
import { useEffect, useState } from "react"
import { Product } from "../models"
import getProductFromBusiness from "../services/getProductsFromBusiness"

export const useBusinessProducts = () => {
  const {businessId} = usePrincipal()
  const [products, setProducts] = useState<Product[]>([])
  const [hasProducts, setHasProducts] = useState<boolean>(false)
  

  useEffect(
    () => {
      setHasProducts(false)
      getProductFromBusiness({businessId})
      .then(({data}) => {
        setProducts(data)
        if(data.length != 0){
          setHasProducts(true)
        }
      })
    }
  ,[businessId])

  return {
    hasProducts,
    products
  }
}