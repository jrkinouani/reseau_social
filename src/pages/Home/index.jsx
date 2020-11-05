import React, {useEffect, useState} from 'react';
import NewPostForm from 'components/NewPostForm'
import ListPosts from 'components/ListPosts'
import { useSelector } from "react-redux";
const Home = () => {
    const isLogin = useSelector(state => state.user!==null);

    const [posts, setPosts] = useState([]);
    
const getAllPosts = () => {
    fetch('https://my-pasteque-space.herokuapp.com/posts?_limit=30&_sort=created_at:desc')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error))
    
}
  useEffect(() => {
    getAllPosts()
  }, [])

    

    return (
        <div>
            <h1>Welcome on My Social Network.</h1>
            <p>
                This website is a training to Redux and React. We use auth and routing
                to create a small social media website.
            </p>

            { isLogin && <NewPostForm onSuccess={getAllPosts} /> }
            <ListPosts data={posts}/>
        
        </div>
    )
}

export default Home;