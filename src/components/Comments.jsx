import { useEffect, useState } from "react";
import { fetchComments } from "../modules/api";
import Comment from "./Comment";

export default function Comments({ articleId }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchComments(articleId).then((data) => {
            const { comments } = data;
            setComments(comments);
            setIsLoading(false);
        });
    }, [articleId]);

    return (
        <div className="comments">
            {isLoading ? (
                <h3>Comments are loading...</h3>
            ) : (
                <>
                    <h3>Comments</h3>
                    <ul className="comments-ul">
                        {comments.map((comment) => (
                            <li className="comments-li" key={comment.comment_id}>
                                <Comment comment={comment} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
