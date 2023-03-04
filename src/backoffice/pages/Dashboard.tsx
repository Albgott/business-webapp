import { AppUser } from "@/models";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { BackofficeLayout } from "../layouts";


const DashBoard = () => {
  return(
    <BackofficeLayout>
      <Outlet />
    </BackofficeLayout>
  )
}

export default DashBoard;