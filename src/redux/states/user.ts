import { createSlice } from "@reduxjs/toolkit";
import { tokenToUser } from "@/services";

const NO_USER = {
  isLogged: false,
  principal: {}
}

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

const initializeState = () => {
  const token = getLocalStorage(LocalStorageTypes.TOKEN)
  
  if(token) return ({
    isLogged: true,
    principal: tokenToUser(token)
  })

  return NO_USER
}


enum LocalStorageTypes {
  TOKEN = "token"
}

export const userSlice = createSlice({
  name: "user",
  initialState: initializeState(),

  reducers: {
    login: (state, action) => {
      return {
        ...action.payload,
        isLogged: true
      }
    },

    logout: (state, action) => NO_USER,
  }
})

export const { login, logout} = userSlice.actions
