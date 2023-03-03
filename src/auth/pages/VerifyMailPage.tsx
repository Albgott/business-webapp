import { PublicRoutes } from "@/router"
import { OutlinedButton } from "@/ui/styled-components"
import { useNavigate, useParams } from "react-router"
import { useSearchParams } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import { verifyAccount } from "../services"


const VerifyMailPage = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")? searchParams.get("token") : ""
  const navigate = useNavigate()

  const verifyEmail = async () => {

    try{
      await verifyAccount({token})
      navigate(PublicRoutes.LOGIN,{replace: true})
    }catch(er){
      navigate(PublicRoutes.SIGNUP,{replace: false})
    }
  }

  return(
    <AuthLayout>
      <h2>Click on the button to verify your email</h2>
      <OutlinedButton onClick={verifyEmail}> Verify email</OutlinedButton>
    </AuthLayout>
  )
}

export default VerifyMailPage