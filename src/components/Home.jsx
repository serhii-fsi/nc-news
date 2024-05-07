import Header from "./Header";
import ArticleDisplay from "./ArticleDisplay";

export default function Home() {
    return (
        <>
            <Header title="Home" />
            <main className="home-main">
                <section className="home-sidebar"></section>
                <section className="home-content">
                    <ArticleDisplay />
                </section>
            </main>
        </>
    );
}
