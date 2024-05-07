import axios from "axios";

import config from "../../config.json";
const {
    appUrl: { apiV1: appUrl },
} = config;

export function fetchArticles() {
    return axios
        .get(`${appUrl}/articles`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function fetchArticle(articleId) {
    return axios
        .get(`${appUrl}/articles/${articleId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}
