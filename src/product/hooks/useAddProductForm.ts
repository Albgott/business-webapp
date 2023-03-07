import { useUuid } from "@/auth/hooks";
import { usePrincipal } from "@/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { addProduct, AddProductRequest } from "../services";

interface IFormInput {
  product_name: string;
  product_description: string;
  product_code: string;
}


const useAddProductForm = () => {

  const { getUuid } = useUuid()
  const { register, handleSubmit, reset } = useForm<IFormInput>()
  const { businessId } = usePrincipal()

  const add: SubmitHandler<IFormInput> = async (data) => {
    const business_id = businessId
    const product_id = getUuid()

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
    add: handleSubmit(add)
  }
}

export default useAddProductForm