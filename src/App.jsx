import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SigninPage from "./components/SigninPage";
import ArticlePage from "./components/ArticlePage";
import Page404 from "./components/Page404";
import { UserProvider } from "./providers/User";

import config from "../config.json";
const {
    router: { paths },
} = config;

function App() {
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path={paths.home.template} element={<HomePage />} />
                    <Route path={paths.signin.template} element={<SigninPage />} />
                    <Route path={paths.article.template} element={<ArticlePage />} />
                    <Route path={paths.topic.template} element={<HomePage />} />
                    <Route path={"*"} element={<Page404 />} />
                </Routes>
            </UserProvider>
        </>
    );
}

export default App;
