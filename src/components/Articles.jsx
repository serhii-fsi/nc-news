import { useEffect, useState } from "react";
import { fetchArticles } from "../modules/api";
import ArticleTile from "./ArticleTile";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((data) => {
            const { articles } = data;
            setArticles(articles);
        });
    }, []);

    return (
        <ul className="articles">
            {articles.map((article) => (
                <li className="articles-li" key={article.article_id}>
                    <ArticleTile article={article} />
                </li>
            ))}
        </ul>
    );
}
