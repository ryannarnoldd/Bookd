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
               Hey {auth.getProfile().username}, Check out all your friends!
            </h2>
            {posts && posts.map((post) => (
                <div className="row align-center mb-5" key={post.userID}>
                    <div className="col-md-6">
                        <h3>{post.userID}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>{post.author}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>{post.rating}</h3>
                    </div>
                    <div className="col-md-6">
                        <h3>{post.review}</h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostList;