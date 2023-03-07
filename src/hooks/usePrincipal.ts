import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export const usePrincipal = () => {
  const userState = useSelector((store: RootState) => store.user)

  return({
    ...userState.principal
  })
}
