import Category from "./Category"

export interface Product {
  id: string
  name: string
  description?: string
  code?: string
  images_ids?: string[]
  categories: Partial<Category>[]
}

export default Product