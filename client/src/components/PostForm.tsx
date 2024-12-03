import { useState } from 'react';
import { createPost, getPostByID, updatePost } from '../api/PostsAPI'; // Ensure `updatePost` is defined in your API
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from '../utils/auth';

function PostForm({ mode, }: { mode: 'create' | 'update'; }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const post = await getPostByID(String(id));
                if (post) {
                    setTitle(post.title || '');
                    setAuthor(post.author || '');
                    setRating(post.rating || 0);
                    setReview(post.review || '');
                }
            } catch (error) {
                console.error('Error getting the post data:', error);
            }
        };

        if (id && mode == 'update') {
            fetchPostData();
        }
    }, [mode, id]);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postUser = auth.getProfile().username;

        try {
            if (mode == 'create') { await createPost({ postUser, title, author, rating, review }); }

            else if (id && mode == 'update') {
                console.log('new data: ', author);
                await updatePost(id, { title, author, rating, review, postUser });
            }

            navigate('/'); // go back home.

        } catch (error) {
            console.error(`Error ${mode === 'create' ? 'creating' : 'updating'} post:`, error);
        }
    };

    return (
        <div className="container-fluid min-vh-100">
            <div className="container">
                <h1 className="text-center">{mode === 'create' ? 'Create a New Post' : 'Update Post'}</h1>
                <form onSubmit={handleFormSubmit} className="border">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            placeholder="Enter author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Rating (out of 10)</label>
                        <select
                            className="form-select"
                            id="rating"
                            value={rating || ''}
                            onChange={(e) => setRating(parseInt(e.target.value))}
                        >
                            <option value="">Select a rating</option>
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            id="review"
                            placeholder="Write your review here"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary">
                        {mode === 'create' ? 'Submit' : 'Update'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;
