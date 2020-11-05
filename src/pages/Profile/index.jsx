import React, { useEffect, useState } from 'react';
//import ListPosts from 'components/ListPosts'
//import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Profile = () => {
  //const isLogin = useSelector(state => state.user!==null);

  const [user, setUser] = useState();
  //const [posts, setPosts] = useState([]);
  const [userEdit, setUserEdit] = useState({
    username: "",
    description: ""
  });

  useEffect(() => {
    fetch("https://my-pasteque-space.herokuapp.com/users/me", {
      method: "get",
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        setUser(response);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserEdit(prevUserEdit => ({
      ...prevUserEdit,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser();
  };

  const editUser = () => {
    fetch(`https://my-pasteque-space.herokuapp.com/users/${user.id}`, {
      method: "put",
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userEdit)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setUser(response);
      })
      .catch(error => console.log(error));
  };


  
    /*fetch(`https://my-pasteque-space.herokuapp.com/posts?user.id=${user.id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error('lol: ' + error))*/
  


  return (
    <div className="profile">
      <h1>My profile</h1>
      {user ? (
        <>
          <div className="information">
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </div>
          <h3>Edit my profile : </h3>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userEdit.username}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              value={userEdit.description}
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
          <h3>My posts </h3> 

        </>
      ) : (
          <p></p>
        )}
    </div>
  );
};

export default Profile;