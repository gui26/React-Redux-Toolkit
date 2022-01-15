import React, { useEffect } from "react";
import{ useDispatch, useSelector} from 'react-redux';
import { Getusers, usersSelected } from "../store/userSlice";

export const Home = () =>{


const { users } = useSelector(usersSelected)
const dispatch = useDispatch();


useEffect( ()=>{
    dispatch(Getusers());

},[dispatch])

    return(
        <div>

{ users && users.map( (user:any, i:number) =><h1 key={i}>{user.name}</h1>)}
                <h1>React Redux Toolkit</h1>            
        </div>
    )
}

export default Home;

// { users && users.map( (user:any, i:number) =><h1 key={i}>{user.name}</h1>)}