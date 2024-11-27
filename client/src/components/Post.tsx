import type { PostData } from "../interfaces/PostData";
import { deletePost } from "../api/PostsAPI";

interface PostProps extends PostData {
    onDelete: (id: number) => void;
}

const Post = ({ id, postUser, title, author, rating, review, onDelete }: PostProps) => {
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

    return (
        
        <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-primary">{title } <button onClick={deleteCurr}>X</button></h5>
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