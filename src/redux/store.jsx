import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './loginState'

export default configureStore({
    reducer:{
        login:loginReducer
    }
})