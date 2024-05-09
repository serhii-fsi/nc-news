import { useState, useContext } from "react";
import { deleteComment } from "../modules/api";
import { UserContext } from "../providers/User";

import config from "../../config.json";
import Comments from "./Comments";
const {
    Comment: { successMsgTimeout, errorMsgTimeout },
} = config;

export default function Comment({ comment, setComments }) {
    const { user } = useContext(UserContext);
    const [deletingStatus, setDeletingStatus] = useState(null);

    const handleDelete = () => {
        setDeletingStatus("deleting");
        deleteComment(comment.comment_id)
            .then(() => {
                setDeletingStatus("success");
                setTimeout(() => {
                    setDeletingStatus(null);
                    setComments((comments) => {
                        const index = comments.findIndex(
                            (el) => el.comment_id === comment.comment_id
                        );
                        if (index !== -1) {
                            comments.splice(index, 1);
                            return [...comments];
                        }
                        return comments;
                    });
                }, successMsgTimeout);
            })
            .catch((err) => {
                setDeletingStatus("error");
                setTimeout(() => setDeletingStatus(null), errorMsgTimeout);
            });
    };

    const deleting = <h4 className="comment-deleting">Deleting...</h4>;
    const success = <h4 className="comment-success">Comment deleted!</h4>;
    const error = <h4 className="comment-error">Deleting failed</h4>;
    const deleteButton = (
        <button onClick={handleDelete} className="comment-delete">
            Delete
        </button>
    );
    const content = (
        <>
            <ul className="comment-ul">
                <li className="comment-li">Author: {comment.author}</li>
                <li className="comment-li">
                    Created: {new Date(comment.created_at).toDateString()}
                </li>
                <li className="comment-li">Votes: {comment.votes}</li>
            </ul>
            <p className="comment-body">{comment.body}</p>
            {user === comment.author ? deleteButton : ""}
        </>
    );

    return (
        <article className="comment">
            {deletingStatus === "deleting" ? deleting : ""}
            {deletingStatus === "success" ? success : ""}
            {deletingStatus === "error" ? error : ""}
            {!deletingStatus ? content : ""}
        </article>
    );
}
