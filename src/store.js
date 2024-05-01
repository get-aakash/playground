import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/userSlice";
import bookReducer from "./components/books/bookSlice";
export default configureStore({
    reducer:{
        user: userReducer,
        book: bookReducer
    }
})