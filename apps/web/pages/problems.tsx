import client from "../utils/sanity";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/Header/Header";
import Problem from "../components/Problem/Problem";

export default function Problems({ problems, difficultyColors }) {
  return (
    <>
      <Header
        headerText="Problems"
        subHeaderText="New problems will be posted an hour before each meeting"
      />
      <Container className="mt-5">
        <Accordion defaultActiveKey="0">
          {[...Array(10).keys()].map((num) => {
            const week = problems[`week${num}`];
            if (week) {
              return (
                <Accordion.Item eventKey={num}>
                  <Accordion.Header>{`Week ${num}`}</Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center align-items-center">
                      {week.map((problem) => {
                        const { _id, name, url, difficulty, solution } = problem;
                        return (
                          <Problem
                            key={_id}
                            name={name}
                            url={url}
                            difficulty={difficulty}
                            solution={solution}
                          />
                        );
                      })}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              );
            }
            return null;
          })}
        </Accordion>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  let quarter;
  if (month >= 9 && month <= 12) {
    quarter = 0;
  } else if (month >= 1 && month <= 3) {
    quarter = 1;
  } else {
    quarter = 2;
  }
  const quarters = await client.fetch(
    `*[_type == "weeklyProblems" && year == ${year} && quarter == '${quarter}']
      { ..., week1[]->, week2[]->, week3[]->, week4[]->, week5[]->, week6[]->, week7[]->, week8[]->, week9-> }`
  );

  const difficultyColors = await client.fetch(`*[_type == "difficultyColor"]`);

  return {
    props: { problems: quarters[0], difficultyColors },
  };
}
