import axios from "axios";

import config from "../../config.json";
const {
    appUrl: { apiV1: appUrl },
    unstableConnection,
} = config;

function checkUnstable() {
    return unstableConnection.simulate ? Math.random() < unstableConnection.chance : false;
}

function getRejected(err) {
    return new Promise((res, rej) => {
        setTimeout(() => rej(err), 50);
    });
}

export function fetchArticles() {
    if (checkUnstable()) return getRejected(new Error());
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
    if (checkUnstable()) return getRejected(new Error());
    return axios
        .get(`${appUrl}/articles/${articleId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function sendArticleVote(articleId, voteNumber) {
    if (checkUnstable()) return getRejected(new Error());
    return axios
        .patch(`${appUrl}/articles/${articleId}`, { inc_votes: voteNumber })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function fetchComments(articleId) {
    if (checkUnstable()) return getRejected(new Error());
    return axios
        .get(`${appUrl}/articles/${articleId}/comments`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}
