import { useState, useContext, act } from "react";
import { sendArticleVote } from "../modules/api";
import storage from "../modules/storage";
import { UserContext } from "../providers/User";

import config from "../../config.json";
const {
    VoteArticle: { likeBlockingTimeout, errorMsgTimeout },
} = config;

export default function VoteArticle({ articleId, votesNumber }) {
    const { user } = useContext(UserContext);
    const [votesNum, setVotesNum] = useState(votesNumber);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const currVote = storage.getArticleVote(user, articleId);

    const handleLike = (like) => {
        if (isLoading) return;
        let nextVote;
        if (like === true) nextVote = currVote === 1 ? 0 : 1;
        if (like === false) nextVote = currVote === -1 ? 0 : -1;
        const increment = nextVote - currVote;
        setIsLoading(true);
        setVotesNum(votesNum + increment);
        storage.setArticleVote(user, articleId, nextVote);
        sendArticleVote(articleId, increment)
            .then(({ article }) => {
                setTimeout(() => {
                    setIsLoading(false);
                }, likeBlockingTimeout);
            })
            .catch((err) => {
                setTimeout(() => {
                    // cancel operation
                    setVotesNum(votesNum);
                    storage.setArticleVote(user, articleId, currVote);
                    setIsLoading(false);
                }, likeBlockingTimeout);

                setIsError(true);
                setTimeout(() => setIsError(false), errorMsgTimeout);
            });
    };

    return (
        <>
            <ul className="vote-article">
                <li className="vote-article-li">Rating: {votesNum}</li>
                {user ? (
                    <>
                        <li className="vote-article-li">
                            <button
                                className={`vote-article-button ${currVote === 1 && "highlight"}`}
                                onClick={() => handleLike(true)}
                            >
                                Like
                            </button>
                        </li>
                        <li className="vote-article-li">
                            <button
                                className={`vote-article-button ${currVote === -1 && "highlight"}`}
                                onClick={() => handleLike(false)}
                            >
                                Dislike
                            </button>
                        </li>
                    </>
                ) : (
                    ""
                )}
            </ul>
            {isError ? <p className="vote-article-error">Operation failed</p> : ""}
        </>
    );
}
