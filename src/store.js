import { configureStore } from "@reduxjs/toolkit";
import toDoReducer  from "./redux/toDoSlice";

export default configureStore({
    reducer:{
        toDo:toDoReducer
    }

})