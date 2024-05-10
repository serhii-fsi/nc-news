import Header from "./Header";
import Articles from "./Articles";
import Topics from "./Topics";

export default function HomePage() {
    return (
        <>
            <Header title="Home" />
            <main className="home-page-main">
                <section className="home-page-sidebar">
                    <Topics />
                </section>
                <section className="home-page-content">
                    <Articles />
                </section>
            </main>
        </>
    );
}
