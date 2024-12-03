import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { retrieveUserPosts } from "../api/PostsAPI";
import type { PostData } from "../interfaces/PostData";
import ErrorPage from "./ErrorPage";
// import auth from '../utils/auth';
import Post from '../components/Post';
// import { Link } from "react-router-dom";

const UserPosts = () => {
    const { postUser } = useParams<{ postUser: string }>(); // Get postUser from URL
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (postUser) {
            fetchPosts(postUser);
        }
    }, [postUser]);


    const fetchPosts = async (postUser: string) => {
        try {
            // const postUser = auth.getProfile().postUser;
            if (postUser) {
                const data = await retrieveUserPosts(postUser);
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

    const user = postUser;

    return (
        <>
            <div className="row">
                <h2>{user}'s Profile</h2>
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
                    <h2>{user} has no posts to display!</h2>
                )}
            </div>
        </>
    );
};

export default UserPosts;