import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo:{}
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state,{payload})=>{
        state.userInfo = payload
    }}
}) 

const {reducer, actions} = userSlice

export const {setUser} = actions

export default reducer