import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export const AppStore = configureStore({

  reducer: {
    user: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch

export default AppStore