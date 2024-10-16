import Head from "next/head";
import About from "../components/About/About";
import Header from "../components/Header/Header";

export default function Landing() {
    return (
        <>
            <Head>
                <title>Home | ACM @ UCI</title>
            </Head>
            <Header
                headerText="ACM @ UCI"
                subHeaderText="Learn about algorithms and improve your interview skills"
            >
                <strong>
                    Meetings will be on Mondays and Wednesdays from 6:00pm to
                    8:00pm at DBH 3011!
                </strong>
            </Header>
            <About />
        </>
    );
}
