import React, { useEffect} from "react";
import '../styles/posts.scss';

import { useDispatch, useSelector} from 'react-redux';
import { GetPost, PostsSelected} from '../store/postSlice'
export const Home = () =>{

  const dispatch = useDispatch();
  const { posts } = useSelector(PostsSelected);

  useEffect( ()=>{
    dispatch(GetPost())
  },[dispatch]);

  


const RenderItems = (props:any)=>{
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





    return(
        <div className="container-home" >
               
                <RenderItems posts={posts} />
        </div>
    )
}

export default Home;

// { users && users.map( (user:any, i:number) =><h1 key={i}>{user.name}</h1>)}