import Nav from "./Nav";

export default function Header({ title }) {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            <Nav />
        </header>
    );
}
