import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


const DashBoard = () => {
  const userState = useSelector((store: RootState) => store.user)
  return(
    <>
      <h1>Hello {userState.principal.accountName} </h1>
      <h2>account id: {userState.principal.accountId}</h2>
      <h2>account name: {userState.principal.accountName}</h2>
      <h2>business id: {userState.principal.businessId}</h2>
      <h2>business name: {userState.principal.businessName}</h2>
      <h2>email: {userState.principal.email}</h2>
      <h2>role: {userState.principal.accountRole}</h2>
      <h2>permissions: {userState.principal.permissions}</h2>
    </>
  )
}

export default DashBoard;