import { Link } from "react-router-dom";
import getRoute from "../utils/get-route";

import config from "../../config.json";
const {
    router: { paths },
} = config;

export default function Nav() {
    return (
        <nav className="nav">
            <Link className="nav-link" to={getRoute(paths.home)}>
                Home
            </Link>
            <Link className="nav-link" to={getRoute(paths.signin)}>
                Sign in
            </Link>
        </nav>
    );
}
