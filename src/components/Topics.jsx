import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTopics } from "../modules/api";

import getRoute from "../utils/get-route";

import config from "../../config.json";
const {
    router: { paths },
} = config;

export default function Topics() {
    const { topic: currentTopic } = useParams();
    const [topics, setTopics] = useState([]);
    const [requestStatus, setRequestStatus] = useState("loading");
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setRequestStatus("loading");
        fetchTopics()
            .then((data) => {
                const { topics } = data;
                setTopics(topics);
                setRequestStatus("success");
            })
            .catch((err) => {
                setRequestStatus("error");
            });
    }, [refresh]);

    const loading = <h4>Topics loading...</h4>;

    const error = (
        <div className="topics-error">
            <h4>Topics loading failed</h4>
            <div>
                <button onClick={() => setRefresh((num) => num + 1)}>Try Again</button>
            </div>
        </div>
    );

    const content = (
        <>
            <ul className="topics-ul">
                <li className="topics-li">
                    <Link
                        className={"topics-link" + (!currentTopic ? " selected" : "")}
                        to={getRoute(paths.home)}
                    >
                        All
                    </Link>
                </li>

                {topics.map((topic) => (
                    <li className="topics-li" key={topic.slug}>
                        <Link
                            className={
                                "topics-link" + (topic.slug === currentTopic ? " selected" : "")
                            }
                            to={getRoute(paths.topic, topic.slug)}
                        >
                            {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <div className="topics">
            {requestStatus === "loading" ? loading : ""}
            {requestStatus === "success" ? content : ""}
            {requestStatus === "error" ? error : ""}
        </div>
    );
}
