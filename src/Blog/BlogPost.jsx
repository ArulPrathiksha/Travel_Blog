import Blogwrite from "./Blogwrite";
import "./BlogPost.css"
import React from "react";

const BlogPost = (props) => {
    const {BlogList} = props;
 
    return(
        <>
        <div className="blog-post-container">
      
      {BlogList.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
        </>
    )
}


export default BlogPost