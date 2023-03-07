import client from "@/services/AxiosApiCLient";

export interface AddProductRequest {
  business_id: string;
  product_id: string;
  product_name: string;
  product_description: string;
  product_code: string;
}

export const addProduct = (product: AddProductRequest) => {
  return client.post("/catalogue/products", product)
}
