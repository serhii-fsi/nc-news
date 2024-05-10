import Header from "./Header";
import Topics from "./Topics";

export default function Page404() {
    return (
        <>
            <Header title="Home" />
            <main className="home-page-main">
                <section className="home-page-sidebar">
                    <Topics />
                </section>
                <section className="home-page-content">
                    <h1 className="page-404-msg">
                        404 Page Not Found
                        <br />
                        "{location.pathname}"
                    </h1>
                </section>
            </main>
        </>
    );
}
