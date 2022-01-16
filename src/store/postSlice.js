import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const GetPost = createAsyncThunk(
    "posts/GetPost",
    async (dispatch, getState) =>{
        return await fetch('https://jsonplaceholder.typicode.com/posts').then(
            res=>res.json()
        )
    }
    
);


export const PostSlice = createSlice({
    name: 'post',
    initialState:{
        posts: [],
        status: null,
    },

    extraReducers:{
        [GetPost.pending]: (state, action)=>{
            state.status = 'pending'
        },

        [GetPost.fulfilled]: (state, action)=>{
            state.status='sucess'
            state.posts = action.payload;
        },

        [GetPost.rejected]: (state, action)=>{
            state.status = 'failed'
        }

    }
}
)

export const PostsSelected = state=> state.posts
export default PostSlice.reducer;