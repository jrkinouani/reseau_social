import React from "react";


const Post = ({username, content, like}) => {
    return (
      <div className=" col-md-4" >
        <div className="card" >
        <div class="card-body">
        <p className="mb-2 text-muted"> Author : {username} </p>
        <h4 className="card-text"> {content} </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><small> {like} likes</small></li>
        </ul>
       </div> 
      </div>
      </div>
    );
  }
  export default Post;