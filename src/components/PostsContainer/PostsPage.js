//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = ({ data }) => {
    return (
        <div className="posts-container-wrapper">
            {data.map((post => {
                return <Post post={post} />
            }))}
        </div>
    );
};

export default PostsPage;