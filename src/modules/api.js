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

function getDataFromErr(err) {
    return err?.response?.data?.error
        ? err?.response?.data?.error
        : { status: 500, msg: "Server Error" };
}

export function fetchArticles(topic, sort) {
    let path = `/articles`;

    path += topic || sort ? "?" : "";
    path += topic ? `topic=${encodeURI(topic)}` : "";

    if (failRequest("get", path)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .get(`${appUrl}${path}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function fetchTopics() {
    const path = `/topics`;
    if (failRequest("get", path)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .get(`${appUrl}${path}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function fetchArticle(articleId) {
    const path = `/articles/${articleId}`;
    if (failRequest("get", path)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .get(`${appUrl}${path}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function sendArticleVote(articleId, voteNumber) {
    if (failRequest("patch", `/articles/${articleId}`)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .patch(`${appUrl}/articles/${articleId}`, { inc_votes: voteNumber })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function fetchComments(articleId) {
    if (failRequest("get", `/articles/${articleId}/comments`)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .get(`${appUrl}/articles/${articleId}/comments`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function postComment(articleId, username, body) {
    if (failRequest("post", `/articles/${articleId}/comments`)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .post(`${appUrl}/articles/${articleId}/comments`, { username, body })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}

export function deleteComment(commentId) {
    if (failRequest("delete", `/comments/${commentId}`)) {
        return getRejected(getDataFromErr());
    }
    return axios
        .delete(`${appUrl}/comments/${commentId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(getDataFromErr(error));
        });
}
