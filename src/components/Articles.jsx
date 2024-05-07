import { useEffect, useState } from "react";
import { fetchArticles } from "../modules/api";
import ArticleTile from "./ArticleTile";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((data) => {
            const { articles } = data;
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    return (
        <ul className="articles">
            {isLoading ? (
                <li className="articles-li">
                    <h2>Loading...</h2>
                </li>
            ) : (
                articles.map((article) => (
                    <li className="articles-li" key={article.article_id}>
                        <ArticleTile article={article} />
                    </li>
                ))
            )}
        </ul>
    );
}
