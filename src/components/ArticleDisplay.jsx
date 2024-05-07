import { useEffect, useState } from "react";
import { fetchArticles } from "../modules/api";
import ArticleTile from "./ArticleTile";

export default function ArticleDisplay() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((data) => {
            const { articles } = data;
            setArticles(articles);
        });
    }, []);

    return (
        <ul className="article-display">
            {articles.map((article) => (
                <li className="article-display-li" key={article.article_id}>
                    <ArticleTile article={article} />
                </li>
            ))}
        </ul>
    );
}
