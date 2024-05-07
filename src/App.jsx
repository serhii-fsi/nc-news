import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";

import config from "../config.json";
const {
    router: { paths },
} = config;

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path={paths.home.template} element={<Home />} />
                <Route path={paths.signin.template} element={<Signin />} />
            </Routes>
        </>
    );
}

export default App;
