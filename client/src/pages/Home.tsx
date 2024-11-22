import { useState, useEffect, useLayoutEffect } from "react";
// import { retrieveUsers } from "../api/userAPI";
import { retrieveUserPosts } from "../api/PostsAPI";
// import type { UserData } from "../interfaces/UserData";
import type { PostData } from "../interfaces/PostData";
import ErrorPage from "./ErrorPage";
import PostList from '../components/Post';
import auth from '../utils/auth';

const Home = () => {

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
            if (auth.getProfile().username) {
                const data = await retrieveUserPosts(auth.getProfile().username);
                setPosts(data)
            }
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to view all your friends!
                        </h1>
                    </div>
                ) : (
                    <PostList posts={posts} />
                )}
        </>
    );
};

export default Home;
