import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: "user",
    initialState : {
        users : [] , 
        usersFiltred : []
    } , 
    reducers : {
        addUser : (state, action)=>{
            state.users.push(action.payload)
        } , 
        filterUsers : (state , action)=>{
            if(action.payload){
                state.usersFiltred = state.users.filter((ele)=> ele.location ===  action.payload)
            }else{
                state.usersFiltred = [] // 0
            }
        } , 
        deleteUser : (state , action)=>{
            state.users = state.users.filter((ele)=> ele.code !== action.payload)
        } , 
        deleteAll : (state , action)=>{
            state.users = []
        }

    }
})


export const {addUser , filterUsers , deleteUser, deleteAll} = UserSlice.actions


export default UserSlice.reducer