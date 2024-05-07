import { Link } from "react-router-dom";
import getRoute from "../utils/get-route";

import config from "../../config.json";
const {
    router: { paths },
} = config;

export default function ArticleTile({ article }) {
    return (
        <article className="article-tile">
            <img className="article-tile-img" src={article.article_img_url} />
            <div>
                <h3 className="article-tile-title">
                    <Link to={getRoute(paths.article, article.article_id)}>
                        {article.title}
                    </Link>
                </h3>
                <ul className="article-tile-ul">
                    <li className="article-tile-li">Author: {article.author}</li>
                    <li className="article-tile-li">Created: {new Date(article.created_at).toDateString()}</li>
                    <li className="article-tile-li">Topic: {article.topic}</li>
                    <li className="article-tile-li">Comments: {article.comment_count}</li>
                    <li className="article-tile-li">Votes: {article.votes}</li>
                </ul>
            </div>
        </article>
    );
}
