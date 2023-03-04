import { logout } from "@/redux/states/user"
import { PublicRoutes } from "@/router"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"


const useLogout = () => {
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const doLogout = () => {
    localStorage.removeItem("token")
    dispatcher(logout())
    navigate("/", {replace: true})
  }

  return {doLogout}
}

export default useLogout