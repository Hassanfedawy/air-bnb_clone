import { configureStore } from "@reduxjs/toolkit";
import guestReducer from './Slices/Guests'

export const store = configureStore({

reducer:{

    guests:guestReducer

}

})

export type RootState = ReturnType <typeof store.getState>
export type Appdispatch = typeof store.dispatch