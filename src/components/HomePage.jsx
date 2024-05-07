import Header from "./Header";
import ArticleDisplay from "./ArticleDisplay";

export default function HomePage() {
    return (
        <>
            <Header title="Home" />
            <main className="home-page-main">
                <section className="home-page-sidebar"></section>
                <section className="home-page-content">
                    <ArticleDisplay />
                </section>
            </main>
        </>
    );
}
