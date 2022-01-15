import { configureStore} from '@reduxjs/toolkit';
import  usersselected from '../store/userSlice'

const store = configureStore({
    reducer:{
        user: usersselected
    }
    
})

export default store;