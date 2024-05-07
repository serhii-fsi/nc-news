import Header from "./Header";
import Article from "./Article";

export default function ArticlePage() {
    return (
        <>
            <Header title="Article" />
            <main className="article-page-main">
                <section className="article-page-content">
                    <Article />
                </section>
            </main>
        </>
    );
}
