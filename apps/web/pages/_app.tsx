import NavigationBar from "../components/NavigationBar/NavigationBar";
import "../styles/bootstrap.scss";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NavigationBar />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}
