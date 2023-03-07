import { useUuid } from "@/auth/hooks";
import { usePrincipal } from "@/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { addProduct, AddProductRequest } from "../services";

export interface IFormInput {
  product_name: string;
  product_description: string;
  product_code: string;
}


const useAddProductForm = () => {

  const { getUuid } = useUuid()
  const { register, handleSubmit, reset } = useForm<IFormInput>()
  const { businessId } = usePrincipal()
  const product_id = getUuid()

  const add: SubmitHandler<IFormInput> = async (data) => {
    const business_id = businessId

		const req: AddProductRequest = {
			...data,
      business_id,
      product_id
		}

    return addProduct(req)
	}


  return {
    register,
    reset,
    add: handleSubmit(add),
    product_id
  }
}

export default useAddProductForm