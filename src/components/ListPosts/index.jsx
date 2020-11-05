import React from 'react';
import Post from '../Post';
import { useSelector } from "react-redux";

const ListPosts = ({data}) => {
  const isLogin = useSelector(state => state.user!==null);

  return (
      <div>      
        
      { data.map((post) => ( isLogin?
          <Post  content={post.text} 
            username={post.user?.username} 
            like={post.like}
            key={post.id}
            /> :
            <Post
            content={post.text} 
            key={post.id}
            /> 
      ))}   
      </div>
    
 )

}

export default ListPosts
