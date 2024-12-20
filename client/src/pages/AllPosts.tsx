import { useState, useEffect, useLayoutEffect } from "react";
// import { retrieveUsers } from "../api/userAPI";
import { retrieveAllPosts } from "../api/PostsAPI";
// import type { UserData } from "../interfaces/UserData";
import type { PostData } from "../interfaces/PostData";
import ErrorPage from "./ErrorPage";
import Post from '../components/Post';
import auth from '../utils/auth';

const AllPosts = () => {

    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        if (loginCheck) {
            fetchPosts();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchPosts = async () => {
        try {

            const data = await retrieveAllPosts();
            setPosts(data)

        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }

    if (error) {
        return <ErrorPage />;
    }

    const handlePostDelete = (deletedPostId: number) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== deletedPostId));
    };

    if (error) {
        return <ErrorPage />;
    }


    return (
        <>
            {!loginCheck ? (
                <div className="login-notice">
                    <h1>Login to view all your posts!</h1>
                </div>
            ) : (
                <div className="row">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Post
                                key={post.id}
                                id={post.id}
                                postUser={post.postUser}
                                title={post.title}
                                author={post.author}
                                rating={post.rating}
                                review={post.review}
                                onDelete={handlePostDelete} // Pass the callback
                            />
                        ))
                    ) : (
                        <h2>No posts to display</h2>
                    )}
                </div>
            )}
        </>
    );
};

export default AllPosts;