import { login } from "@/redux/states/user";
import { PrivateRoutes } from "@/router";
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LoginRequest } from "../models";
import { doLogin } from "../services";

interface IFormInput {
  businessName: string;
  email: string;
  password: string;
}

const requiredMessage ="This field is required" 

interface errorState {
  businessName: string[],
  email: string[],
  password: string[],
}

const useLoginForm = () => {
  const [errors, setErrors] = useState<errorState>({
    businessName: [],
    email: [],
    password: [],
  })

  const validateBusinessName = (value: string) => {
    if(value == null || value.length == 0 ){
      setErrors({...errors, businessName: [requiredMessage]})
    }
  }

  const validateEmail = (value: string) => {
    if(value == null || value.length == 0 ){
      setErrors({...errors, email: [requiredMessage]})
    }
  }

  const validatePassword = (value: string) => {
    if(value == null || value.length == 0 ){
      setErrors({...errors, password: [requiredMessage]})
    }else if(value.length < 8){
      setErrors({...errors, password: ["Password must be at least 8 characters long"]})
    }
  }
  
  const navigate = useNavigate()
	const dispatcher = useDispatch()
  const { register, handleSubmit } = useForm<IFormInput>()

  const tryLogin: SubmitHandler<IFormInput> = async (data) => {
    validateBusinessName(data.businessName)
    validateEmail(data.email)
    validatePassword(data.password)

		const req: LoginRequest = {
			...data
		}

		try{
			const res = await doLogin(req)
			localStorage.setItem("token", res.token)
			dispatcher(login(res.user))
			navigate(PrivateRoutes.PRODUCTS, {replace:true})
		} catch(err){
			console.log(err)
		}
	}


  return {
    errors,
    register,
    doLogin: handleSubmit(tryLogin)
  }
}

export default useLoginForm