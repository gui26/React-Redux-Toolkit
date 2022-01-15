import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



export const Getusers = createAsyncThunk(
    "users/Getusers",
    async (dispatch, getState) =>{
        return await fetch('https://jsonplaceholder.typicode.com/users').then(
            res=>res.json()
        )
    }

);

export const userSlice = createSlice({
    name:'user',
    initialState:{
       users:[],
       status: null,
    },
    extraReducers:{
        [Getusers.pending]: (state, action) =>{
            state.status = 'pending'
        },

        [Getusers.fulfilled]: (state, action) =>{
            state.status = 'sucess';
            state.users = action.payload;
            
        },
        [Getusers.rejected]: (state, action) =>{
            state.status = 'failed'
        }
    }
})


export const usersSelected = (state) => state.users;
export default  userSlice.reducer;