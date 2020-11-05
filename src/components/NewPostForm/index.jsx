import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
//import { useForm } from 'react-hook-form';

const NewPostForm = ({onSuccess}) =>{

    const userId = useSelector((state) => state.user.id);
    console.log(userId)
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        const data = { text, user: userId };
        createPost(data);
    }
    

    const createPost = (data) => {
        fetch('https://my-pasteque-space.herokuapp.com/posts', {
            method: "post",
        headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        onSuccess()
    })
    .catch(error => console.log(error));
    }; 
    /*const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }   */
        return(
            
            <div>
            {
               //isLogin &&
            
            <form name="blog_post" className="form-horizontal" onSubmit={handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="post_content">Create a post</label>
                        <div className="col-sm-10">
                            <input   id="post_text" placeholder="your post"
                                   className="form-control" name="text"/>
                                   
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button
                                    className="btn-default btn"
                                    type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            }
                
            </div>
        )
}

export default NewPostForm