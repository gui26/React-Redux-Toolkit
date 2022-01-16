import React, { useEffect} from "react";
import '../styles/posts.scss';

import { useDispatch, useSelector} from 'react-redux';
import { GetPost, PostsSelected} from '../store/postSlice';
import { Getusers, userSelected } from "../store/userSlice";
export const Home = () =>{

  const dispatch = useDispatch();
  const { posts } = useSelector(PostsSelected);
  const { users } = useSelector(userSelected);

  useEffect( ()=>{
    dispatch(GetPost())
  },[dispatch]);


  useEffect( ()=>{
    dispatch(Getusers())
  },[dispatch]);


const RenderPosts= (props:any)=>{
   const Lista = props.posts.map( (post:any) =>
     <div key={post.id} className="Posts">
       <h3>{post.title}</h3>
       <p>{post.body}</p>
     </div>
   )
   return (
     <div>
       {Lista}
     </div>
   )
};



const RenderUsers = (props:any)=>{
  const ListUser = props.users.map( (user:any) =>
    <div key={user.id} className="users">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
  return (
    <div>
      {ListUser}
    </div>
  )
};


    return(
        <div className="container-home" >
                <RenderUsers users={users}/>
                <RenderPosts posts={posts} />
        </div>
    )
}

export default Home;

// { users && users.map( (user:any, i:number) =><h1 key={i}>{user.name}</h1>)}