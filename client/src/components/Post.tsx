import type { PostData } from "../interfaces/PostData";
import { deletePost } from "../api/PostsAPI";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";

interface PostProps extends PostData {
    onDelete: (id: number) => void;
}

const Post = ({ id, postUser, title, author, rating, review, onDelete }: PostProps) => {
    const navigate = useNavigate();

    const deleteCurr = async (): Promise<void> => {
        if (id) {
            try {
                await deletePost(id);
                onDelete(id);
            } catch (err) {
                console.error("Failed to delete post:", err);
            }
        }
    };

    const updateCurr = (): void => {
        if (id) {
            navigate(`/posts/update/${id}`); // (This can be better done.)
        }
    };

    return (
        <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-primary">
                        {title}{" "}
                        <button className="btn btn-sm btn-danger ms-2" onClick={deleteCurr}>
                            X
                        </button>
                    </h5>
                    { postUser === auth.getProfile().username ? (<button className="btn btn-sm btn-secondary" onClick={updateCurr}> Update </button>)
                    : "You are not allowed to update this post." }
                    <h6 className="card-subtitle mb-2 text-muted">by {author}</h6>
                    <p className="card-text">
                        <strong>User:</strong> {postUser}
                    </p>
                    <p className="card-text">
                        <strong>Rating:</strong> {rating}/10
                    </p>
                    <p className="card-text">
                        <strong>Review:</strong> {review}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;