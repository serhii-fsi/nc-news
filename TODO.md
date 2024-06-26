# Tasks

    https://l2c.northcoders.com/courses/fe/fe-nc-news

# Checklist before requesting a review

-   [ ] I have performed a self-review of my code
-   [ ] If it is a core feature, I have added thorough tests.

# Task 4 - CORE: View a list of all articles

-   [x] Implement HomePage component.
    -   [x] Implement sidebar and content sections.
-   [x] Implement Header component.
-   [x] Implement Nav component and add another menu item - Sign in,
        route - /signin, component Signin to test Home component unmount.
-   [x] Create Articles component.
-   [x] Install axios.
-   [x] Crate api module and implement fetchArticles().
-   [x] Crate project config file config.json and add root application url.
        It should be the single source of truth for the application.
-   [x] Crate getRoute() util function.
-   [x] Invoke and test fetchArticles() inside Articles.
-   [x] Implement ArticleTile component and display articles.
-   [x] Implement loader.
-   [ ] Implement error handling (later).
-   [ ] Add better styles (later)
    -   [ ] What is an individual article card going to look like?
    -   [ ] How can you display the information in an engaging and accessible way?
    -   [ ] How are you going to arrange the articles on the screen?
    -   [ ] How will this view change with screens of different sizes?

# Task 5 - CORE: View an individual article

-   [x] Add ArticlePage component to the router.
-   [x] Implement ArticlePage component.
-   [x] Implement Article component and loader.
-   [ ] Implement error handling (later).
-   [ ] Add better styles (later)
    -   [ ] How are you going to make use of the space to display the data?
    -   [ ] How can you display the information in an engaging and accessible way?
    -   [ ] How will this view change with screens of different sizes?

# Task 6 - CORE: View a list of comments associated with an article

-   [x] Implement Comments component and loader.
-   [x] Implement fetchComments().
-   [x] Implement Comment component.
-   [ ] Implement error handling (later).
-   [ ] Add better styles (later)
    -   [ ] How is a comment card presented?
    -   [ ] How are the comment cards arranged to make use of the available space?
    -   [ ] How can you display the information in an engaging and accessible way?
    -   [ ] How will this view change with screens of different sizes?

# Task 7 - CORE: Vote on an article

-   [x] Implement VoteArticle component.
    -   [x] Implement UserContext and set default user.
    -   [x] Implement local storage.
    -   [x] Implement sendArticleVote().
    -   [x] Implement re-vote blocking until request finished and time delay.
    -   [x] Implement simple error displaying.
    -   [x] Guests cannot vote.
    -   [x] Implement simulation of unstable connection.
-   [ ] Implement global error store and displaying (later).
-   [ ] Add better styles (later)
    -   [ ] How can you display the information in an engaging and accessible way?
    -   [ ] How will this view change with screens of different sizes?

# Task 8 - CORE: Post a new comment to an existing article

-   [x] Implement PostComment component.
    -   [x] How can you ensure a user has filled out all the required information?
    -   [x] Implement posting functionality.
    -   [x] Guests cannot post.
    -   [x] Implement loader and block multi posting.
    -   [x] Refresh all the comments after post completion.
    -   [x] Display feedback to the user to show them their post has
            been successful.
    -   [x] Clear the form field.
    -   [x] Highlights the comment that has been added
            for X (from config) seconds. (later)
    -   [x] Implement simple error displaying.
-   [ ] Implement advanced error displaying. (later)
-   [ ] Add better styles (later)
    -   [ ] How can you display the information in an engaging and accessible way?
    -   [ ] How will this view change with screens of different sizes?

# Task 9 - CORE: Delete comments

-   [x] Implement delete comment functionality.
    -   [x] Add Delete button for current user's comments only.
    -   [x] Implement delete request functionality.
    -   [x] Delete only this comment from the DOM after timeout,
            without comments refreshing.
            for X (from config) seconds. (later)
    -   [x] Display deleting... status loader.
    -   [x] Display successful message with timeout.
    -   [x] Display simple error message with timeout.
-   [ ] Loading, deleting, error messages should not change comment box size. (later)
-   [ ] Hide Delete button and add popover 3 dots menu it the top right corner. (later)
-   [ ] Implement advanced error displaying. (later)
-   [ ] Add better styles (later)
    -   [ ] How can you display the information in an engaging and accessible way?

# Task 10 - CORE: View a separate page for each topic with a list of related articles

-   [x] Implement Topics component.
-   [x] Implement fetch topics function.
-   [x] Implement filtering by topics functionality in Articles.
-   [x] Implement loader.
-   [x] Display error message in Topics.
-   [x] Display error message on wrong topic in Articles.
-   [ ] Add better styles (MUI - later)
    -   [ ] How will this view change with screens of different sizes?
    -   [ ] How can you display the information in Topics in an engaging and accessible way?

# Task 11 - CORE: Sort articles

-   [x] Implement ArticlesSort component.
    -   [x] Reads query and set controls accordingly.
    -   [x] Changes query on controls change.
-   [x] Implement sorting functionality in fetchArticles().
-   [x] Implement sorting functionality in Articles component.
-   [-] Display error message on wrong query params in Articles.
    Decided just to skip wrong params, because app should always
    give a correct path.
-   [ ] Add better styles (MUI - later)
    -   [ ] How will this view change with screens of different sizes?
    -   [ ] How can you display the information in an engaging and accessible way?

# Task 12 - CORE: Error handling

-   [x] Users should be able to see an appropriate errors
    -   [x] for a non-existent path.
    -   [x] for a non-existent article.
    -   [x] for a non-existent topic.
    -   [x] when posting a new comment if they have not provided
            all of the required information.
-   [ ] Add better styles (MUI - later)

# Task 13 - CORE: Deploy app

-   [x] See it. Say it. ~~Sorted~~ Deployed :D

# Bugs

# Improvements
