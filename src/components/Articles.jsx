import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../modules/api";
import ArticleTile from "./ArticleTile";

export default function Articles() {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [requestStatus, setRequestStatus] = useState("loading");
    const [errorMsg, setErrorMsg] = useState("");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setRequestStatus("loading");
        fetchArticles(topic)
            .then((data) => {
                const { articles } = data;
                setArticles(articles);
                setRequestStatus("success");
            })
            .catch((err) => {
                setRequestStatus("error");
                setErrorMsg(err.msg);
            });
    }, [topic, refresh]);

    const loading = (
        <div className="articles-loading">
            <h4>Loading...</h4>
        </div>
    );

    const error = (
        <div className="articles-error">
            <h4>
                Articles loading failed
                <br />
                {errorMsg}
            </h4>
            <div>
                <button onClick={() => setRefresh((num) => num + 1)}>Try Again</button>
            </div>
        </div>
    );

    const content = (
        <ul className="articles">
            {articles.map((article) => (
                <li className="articles-li" key={article.article_id}>
                    <ArticleTile article={article} />
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {requestStatus === "loading" ? loading : ""}
            {requestStatus === "success" ? content : ""}
            {requestStatus === "error" ? error : ""}
        </>
    );
}
