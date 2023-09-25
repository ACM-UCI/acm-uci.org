import Head from "next/head";
import client from "../utils/sanity";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/Header/Header";
import Problem from "../components/Problem/Problem";
import { ProblemType } from "../types";

export default function Problems({ problems }) {
    return (
        <>
            <Head>
                <title>Problems | ACM @ UCI</title>
            </Head>
            <Header
                headerText="Problems"
                subHeaderText="New problems will be posted an hour before each meeting"
            />
            <Container className="my-5">
                {problems.length === 0 ? (
                    <Accordion defaultActiveKey="0">
                        {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => {
                            const week = problems[`week${num}`];
                            if (week) {
                                return (
                                    <Accordion.Item eventKey={`${num}`}>
                                        <Accordion.Header>
                                            <h3>{`Week ${num}`}</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="justify-content-center align-items-center">
                                                {week.map(
                                                    (problem: ProblemType) => {
                                                        const {
                                                            _id,
                                                            name,
                                                            url,
                                                            difficulty,
                                                            solutionURL,
                                                        } = problem;
                                                        return (
                                                            <Problem
                                                                key={_id}
                                                                name={name}
                                                                url={url}
                                                                difficulty={
                                                                    difficulty
                                                                }
                                                                solutionURL={
                                                                    solutionURL
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            }
                            return null;
                        })}
                    </Accordion>
                ) : (
                    <>
                        <p className="text-center">
                            No problems are currently available! Please check
                            back later.
                        </p>
                    </>
                )}
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    let quarter: number;
    if (month >= 9 && month <= 12) {
        quarter = 0;
    } else if (month >= 1 && month <= 3) {
        quarter = 1;
    } else {
        quarter = 2;
    }

    let joinStr = "";
    for (let i = 1; i <= 9; ++i) {
        joinStr += `week${i}[]->{ ..., "solutionURL": solution.asset->url }, `;
    }

    const quarters = await client.fetch(
        `*[_type == "weeklyProblem" && year == ${year} && quarter == '${quarter}']
      { ..., ${joinStr} }`
    );

    return {
        props: { problems: quarters[0] ?? [] },
        revalidate: 10,
    };
}
