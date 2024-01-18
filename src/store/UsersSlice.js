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
        }

    }
})


export const {addUser , filterUsers} = UserSlice.actions


export default UserSlice.reducer