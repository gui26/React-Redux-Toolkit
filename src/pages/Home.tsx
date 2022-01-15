import React, { useEffect } from "react";
import{ useDispatch, useSelector} from 'react-redux';
import { Getusers, usersselected } from "../store/userSlice";

export const Home = () =>{
const { users } = useSelector(usersselected)
    const dispatch = useDispatch();


useEffect( ()=>{
    dispatch(Getusers());

},[dispatch])




    return(
        <div>
            { users && users.map((user:any, i:number)=><h1 key={i} className="Title">{user.name}</h1>) } 
            <h1>Aqui é Home</h1>
        </div>
    )
}

export default Home;