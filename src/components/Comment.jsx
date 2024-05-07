export default function Comment({ comment }) {
    return (
        <article className="comment">
            <ul className="comment-ul">
                <li className="comment-li">Author: {comment.author}</li>
                <li className="comment-li">Created: {new Date(comment.created_at).toDateString()}</li>
                <li className="comment-li">Votes: {comment.votes}</li>
            </ul>
            <p className="comment-body">{comment.body}</p>
        </article>
    );
}
