import { useState, useContext } from "react";
import { postComment } from "../modules/api";
import { UserContext } from "../providers/User";

import config from "../../config.json";
const {
    PostComment: { successMsgTimeout, errorMsgTimeout, commentHighlightTimeout },
} = config;

export default function PostComment({ articleId, setRefreshComments, setHighlightedCommentId }) {
    const { user } = useContext(UserContext);
    const [body, setBody] = useState("");
    const [postingStatus, setPostingStatus] = useState(null);

    const handlePostComment = (event) => {
        event.preventDefault();
        setPostingStatus("posting");
        postComment(articleId, user, body)
            .then(({ comment }) => {
                setRefreshComments((num) => num + 1);
                setBody(""); // delete body text
                
                setPostingStatus("success");
                setTimeout(() => setPostingStatus(null), successMsgTimeout);

                setHighlightedCommentId(comment.comment_id);
                setTimeout(() => setHighlightedCommentId(null), commentHighlightTimeout);
            })
            .catch((err) => {
                setPostingStatus("error");
                setTimeout(() => setPostingStatus(null), errorMsgTimeout);
            });
    };

    const posting = <h4 className="post-comment-posting">Posting...</h4>;
    const success = <h4 className="post-comment-success">Comment posted!</h4>;
    const error = <h4 className="post-comment-error">Posting failed</h4>;
    const form = (
        <form className="post-comment" onSubmit={handlePostComment}>
            <textarea
                className="post-comment-body"
                type="text"
                name="body"
                required={true}
                aria-required="true"
                onChange={(event) => setBody(event.target.value)}
                value={body}
            ></textarea>
            <input className="post-comment-submit" type="submit" value="Post comment" />
        </form>
    );

    return (
        <>
            {postingStatus === "posting" ? posting : ""}
            {postingStatus === "success" ? success : ""}
            {postingStatus === "error" ? error : ""}
            {!postingStatus ? form : ""}
        </>
    );
}
