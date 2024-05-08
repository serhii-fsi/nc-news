function getObj(key) {
    return JSON.parse(window.localStorage.getItem(key) ?? "{}");
}

function setObj(key, obj) {
    window.localStorage.setItem(key, JSON.stringify(obj));
}

function getArticleVote(user, articleId) {
    return getObj("articlesVotes")[user]?.[articleId]?.vote ?? 0;
}

function setArticleVote(user, articleId, vote) {
    const articlesVotes = getObj("articlesVotes");
    articlesVotes[user] ??= {};
    articlesVotes[user][articleId] ??= {};
    articlesVotes[user][articleId].vote = vote;
    setObj("articlesVotes", articlesVotes);
}

export default { getObj, setObj, getArticleVote, setArticleVote };
