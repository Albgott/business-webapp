import client from "@/services/AxiosApiCLient"

export interface UploadImageRequest {
  product_id: string
  image: File
}

export const uploadImageToProduct = ({product_id, image} : UploadImageRequest) => {
  const formData = new FormData()
  formData.append("file",image)
  return client.post(`/catalogue/products/${product_id}/img`, formData,{
    headers: {"Content-Type": "multipart/form-data"}
  })
}