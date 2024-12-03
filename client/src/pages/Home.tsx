import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUserPosts } from "../api/PostsAPI";
import type { PostData } from "../interfaces/PostData";
import ErrorPage from "./ErrorPage";
import auth from '../utils/auth';
import Post from '../components/Post';
import { Link } from "react-router-dom";
import background from '../../assets/123.avif';

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
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white', // Adjust text color for better contrast
                padding: '20px',
            }}
        >
            {!loginCheck ? (
                <div className="login-notice" style={{ textAlign: 'center' }}>
                    <h1>Welcome to Bookd!</h1>
                    <br /><br />
                    <h2>Discover, Review, and Share Your Reading Journey!</h2>
                    <br />
                    <h4>Bookd is your personal bookshelf companion, making it easy to keep track of the books you’ve read, plan your next read, and explore what others are enjoying. Whether you’re diving into the latest bestseller or rediscovering a classic, Bookd helps you stay organized and inspired.</h4>
                </div>
            ) : (
                <div className="row">
                    <button className="btn btn-primary mb-3" type="button">
                        <Link to="/create" className="text-white text-decoration-none">Create New Post!</Link>
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
                        <h2>You do not have any posts yet!</h2>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
