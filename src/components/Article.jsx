import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../modules/api";
import Comments from "./Comments";
import VoteArticle from "./VoteArticle";

export default function Article() {
    const { article_id } = useParams();
    const articleId = article_id;
    const [article, setArticle] = useState([]);
    const [requestStatus, setRequestStatus] = useState("loading");
    const [errorMsg, setErrorMsg] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setRequestStatus("loading");
        fetchArticle(articleId)
            .then((data) => {
                const { article } = data;
                setArticle(article);
                setRequestStatus("success");
            })
            .catch((err) => {
                setRequestStatus("error");
                setErrorMsg(err.msg);
            });
    }, [articleId, refresh]);

    const loading = <h2>Loading...</h2>;

    const error = (
        <div className="article-error">
            <h3>
                Article loading failed
                <br />
                Article ID: {articleId}
                <br />
                Error message: {errorMsg}
            </h3>
            <div>
                <button onClick={() => setRefresh((num) => num + 1)}>Try Again</button>
            </div>
        </div>
    );

    const content = (
        <>
            <img className="article-img" src={article.article_img_url} />
            <div>
                <h2 className="article-title">{article.title}</h2>
                <section>
                    <ul className="article-ul">
                        <li className="article-li">Author: {article.author}</li>
                        <li className="article-li">
                            Created: {new Date(article.created_at).toDateString()}
                        </li>
                        <li className="article-li">Topic: {article.topic}</li>
                    </ul>
                </section>
                <section>
                    <p className="article-body">{article.body}</p>
                </section>
                <section>
                    <VoteArticle articleId={articleId} votesNumber={article.votes} />
                </section>
                <section>
                    <Comments articleId={articleId} />
                </section>
            </div>
        </>
    );

    return (
        <>
            {requestStatus === "loading" ? loading : ""}
            {requestStatus === "success" ? content : ""}
            {requestStatus === "error" ? error : ""}
        </>
    );
}
