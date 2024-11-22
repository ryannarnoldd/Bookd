import React from 'react';

import type { PostData } from "../interfaces/PostData";
import auth from '../utils/auth';

// Define the props for the component
interface PostListProps {
    posts: PostData[] | null; // Posts can be an array of PostData objects or null
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <>
            <h2 className="pb-5">
               Hey {auth.getProfile().username}, Check out all the posts from you and your friends!
            </h2>

            {posts && posts.map((post) => (
                <div className="card">
                    <label className='label'>User: </label> <p className='info'>{post.postUser}</p>
                    <label className='label'>Title: </label> <p className='info'>{post.title}</p>
                    <label className='label'>Author: </label> <p className='info'>{post.author}</p>
                    <label className='label'>Rating: </label> <p className='info'>{post.rating}/10</p>
                    <label className='label'>Review: </label> <p className='info'>{post.review}</p>
                </div>
            ))}
        </>
    );
};

export default PostList;