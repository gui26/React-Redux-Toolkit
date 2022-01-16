import { configureStore} from '@reduxjs/toolkit';
import  userReducer  from './userSlice';
import  postReducer  from './postSlice';

const store = configureStore({
    reducer:{
        users: userReducer,
        posts: postReducer
    }
})
export default store;