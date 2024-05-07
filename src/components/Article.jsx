import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../modules/api";
import Comments from "./Comments";

export default function Article() {
    const { article_id } = useParams();
    const articleId = Number(article_id);
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticle(articleId).then((data) => {
            const { article } = data;
            setArticle(article);
            setIsLoading(false);
        });
    }, [articleId]);

    return (
        <article className="article">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <img className="article-img" src={article.article_img_url} />
                    <div>
                        <h2 className="article-title">{article.title}</h2>
                        <section>
                            <ul className="article-ul">
                                <li className="article-li">Author: {article.author}</li>
                                <li className="article-li">Created: {new Date(article.created_at).toDateString()}</li>
                                <li className="article-li">Topic: {article.topic}</li>
                                <li className="article-li">Comments: {article.comment_count ?? "undefined"}</li>
                                <li className="article-li">Votes: {article.votes}</li>
                            </ul>
                        </section>
                        <section>
                            <p className="article-body">{article.body}</p>
                        </section>
                        <section>
                            <Comments articleId={articleId} />
                        </section>
                    </div>
                </>
            )}
        </article>
    );
}
