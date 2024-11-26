import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from '../utils/auth';
import { createPost } from '../api/PostsAPI';
import { useNavigate } from 'react-router-dom';

function PostForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postUser = auth.getProfile().username;

        try {
            await createPost({ postUser, title, author, rating, review });
            navigate('/');

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Create a New Post</h1>
            <form onSubmit={handleFormSubmit} className="border">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" placeholder="Enter author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rating (out of 10)</label>
                    <select className="form-select" id="rating" value={rating ?? ''}
                        onChange={(e) => {
                            const selectedRating = parseInt(e.target.value);
                            setRating(selectedRating);
                        }}
                    >
                        <option value="">Select a rating</option>
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" id="review" placeholder="Write your review here" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                </div>


                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default PostForm;