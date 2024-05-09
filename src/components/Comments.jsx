import { useEffect, useState, useContext } from "react";
import { fetchComments } from "../modules/api";
import { UserContext } from "../providers/User";
import PostComment from "./PostComment";
import Comment from "./Comment";

export default function Comments({ articleId }) {
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshComments, setRefreshComments] = useState(0);
    const [highlightedCommentId, setHighlightedCommentId] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchComments(articleId).then((data) => {
            const { comments } = data;
            setComments(comments);
            setIsLoading(false);
        });
    }, [articleId, refreshComments]);

    return (
        <div className="comments">
            <>
                <h3>Comments: ({comments.length})</h3>

                {user ? (
                    <div className="">
                        <PostComment
                            articleId={articleId}
                            setRefreshComments={setRefreshComments}
                            setHighlightedCommentId={setHighlightedCommentId}
                        />
                    </div>
                ) : (
                    ""
                )}

                {isLoading && refreshComments === 0 ? (
                    <h3>Comments are loading...</h3>
                ) : (
                    <ul className="comments-ul">
                        {comments.map((comment) => (
                            <li
                                className={
                                    "comments-li" +
                                    (comment.comment_id === highlightedCommentId
                                        ? " highlighted"
                                        : "")
                                }
                                key={comment.comment_id}
                            >
                                <Comment comment={comment} setComments={setComments} />
                            </li>
                        ))}
                    </ul>
                )}
            </>
        </div>
    );
}
