import { ApiRoutes } from "@/models";
import axios from "axios";

const client = axios.create({
  baseURL: ApiRoutes.BASE,
  
})

export default client