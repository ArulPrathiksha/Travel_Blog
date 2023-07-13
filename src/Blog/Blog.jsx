import React from "react";
import { useState } from 'react';
import Blogdate from "./Blogdate";
import BlogPost from "./BlogPost";
import Blogwrite from "./Blogwrite";
import { Router } from "react-router-dom";
import { nanoid } from "nanoid";
import "./Blog.css"

const BLOG = [{
    id: nanoid(),
    title: "Blog1",
    content: "I have visited Tajmahal",
    date: "2023-2-4"
},
{
    id: nanoid(),
    title: "Blog2",
    content: "I have visited Kanyakumari",
    date: "2022-03-03"
}
]
const Blog = (props) => {

    const { date, title, content } = props;
    const [BlogList, setBlogList] = useState(BLOG);

    const addBlog = async (newObj) => {
        await fetch('http://localhost:8000/blog/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
        setBlogList([...BlogList, newObj]);
        console.log([...BlogList, newBlog]);

    }

    return (
        <>
            <Blogwrite addBlog={addBlog} />
            <BlogPost BlogList={BlogList} />
            
        </>
    );
}


export default Blog;