import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SigninPage from "./components/SigninPage";
import ArticlePage from "./components/ArticlePage";

import config from "../config.json";
const {
    router: { paths },
} = config;

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path={paths.home.template} element={<HomePage />} />
                <Route path={paths.signin.template} element={<SigninPage />} />
                <Route path={paths.article.template} element={<ArticlePage />} />
            </Routes>
        </>
    );
}

export default App;
