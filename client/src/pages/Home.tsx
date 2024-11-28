import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUserPosts } from "../api/PostsAPI";
import type { PostData } from "../interfaces/PostData";
import ErrorPage from "./ErrorPage";
import auth from '../utils/auth';
import Post from '../components/Post';
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    useLayoutEffect(() => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    }, []);

    useEffect(() => {
        if (loginCheck) {
            fetchPosts();
        }
    }, [loginCheck]);

    const fetchPosts = async () => {
        try {
            const username = auth.getProfile().username;
            if (username) {
                const data = await retrieveUserPosts(username);
                setPosts(data);
            }
        } catch (err) {
            console.error("Failed to retrieve posts:", err);
            setError(true);
        }
    };

    // Function to handle post deletion
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
                    <button className="btn btn-primary" type="button">
                        <Link to="/create" className="text-white text-decoration-none">Create</Link>
                    </button>
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

export default Home;