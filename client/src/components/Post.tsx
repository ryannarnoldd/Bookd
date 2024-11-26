import React from 'react';
import type { PostData } from "../interfaces/PostData";
import auth from '../utils/auth';

interface PostListProps {
    posts: PostData[] | null; // Posts can be an array of PostData objects or null
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    const username = auth.getProfile().username;

    return (
        <div className="container mt-5">
            <h2 className="pb-4 text-center">
                Hey <strong>{username}</strong>, check out all the posts from you and your friends!
            </h2>

            {posts && posts.length > 0 ? (
                <div className="row">
                    {posts.map((post, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{post.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">by {post.author}</h6>
                                    <p className="card-text">
                                        <strong>User:</strong> {post.postUser}
                                    </p>
                                    <p className="card-text">
                                        <strong>Rating:</strong> {post.rating}/10
                                    </p>
                                    <p className="card-text">
                                        <strong>Review:</strong> {post.review}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-info text-center" role="alert">
                    No posts to display. Create some and check back!
                </div>
            )}
        </div>
    );
};

export default PostList;