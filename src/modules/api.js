import axios from "axios";

import config from "../../config.json";
const {
    appUrl: { apiV1: appUrl },
    unstableConnection,
} = config;

function failRequest(method, path) {
    return unstableConnection.simulate &&
        new RegExp(unstableConnection.method, "i").test(method) &&
        new RegExp(unstableConnection.path, "i").test(path)
        ? Math.random() > unstableConnection.successChance
        : false;
}

function getRejected(err) {
    return new Promise((res, rej) => {
        setTimeout(() => rej(err), 50);
    });
}

export function fetchArticles() {
    if (failRequest("get", `/articles`)) {
        return getRejected(new Error());
    }
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
    if (failRequest("get", `${appUrl}/articles/${articleId}`)) {
        return getRejected(new Error());
    }
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
    if (failRequest("patch", `/articles/${articleId}`)) {
        return getRejected(new Error());
    }
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
    if (failRequest("get", `/articles/${articleId}/comments`)) {
        return getRejected(new Error());
    }
    return axios
        .get(`${appUrl}/articles/${articleId}/comments`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function postComment(articleId, username, body) {
    if (failRequest("post", `/articles/${articleId}/comments`)) {
        return getRejected(new Error());
    }
    return axios
        .post(`${appUrl}/articles/${articleId}/comments`, { username, body })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function deleteComment(commentId) {
    if (failRequest("delete", `/comments/${commentId}`)) {
        return getRejected(new Error());
    }
    return axios
        .delete(`${appUrl}/comments/${commentId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}
