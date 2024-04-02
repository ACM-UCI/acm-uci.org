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
                    Meetings will be on Tuesdays and Thursdays from 6:30pm to
                    8:30pm at ICS 428!
                </strong>
            </Header>
            <About />
        </>
    );
}
