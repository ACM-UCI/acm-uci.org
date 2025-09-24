// FULL DISCLOSURE - used ChatGPT and old ACM website to make the fetching function TOT
// manually doing it is a pain

import { Accordion, Row, Col } from 'react-bootstrap';
import { client } from "../sanity/client.ts";
import { useState, useEffect } from "react"
import type { WeeklyProblems, Presentation } from '../extra/types.ts';
import "../scss/global.scss"
import imageUrlBuilder from "@sanity/image-url";

import Loading from '../extra/Loading.tsx';

import { useLocation } from 'react-router-dom';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}


function getCurrentQuarterAndYear() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan

  let quarter;
  if (month >= 8) quarter = '0'; // Sep-Dec → Fall
  else if (month >= 0 && month <= 2) quarter = '1'; // Jan-Mar → Winter
  else quarter = '2'; // Apr-Aug → Spring

  console.log(`deleting after but the year and quarter are ${year} ${quarter}`)

  return { year, quarter };
}

function PracticeBanner() {
  let practice_doodle = import.meta.env.BASE_URL + "/practice/practice_doodle.jpg";
  let practice_banner_main_header = "New practice problems and presentations at every meeting"
  let practice_banner_sub_header = "Try your hand at the easy problems, then see how you fare with the harder ones!"

  return (
    <div id="top" className="practice_banner_wrapper d-flex justify-content-center align-items-center">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <img src={practice_doodle} className="subpage_banner_image"></img>
        </Col>
        <Col xs={12} md={8} className="text-left">
          <h1 className="static-font-size-10">{practice_banner_main_header}</h1>
          <h1 className="static-font-size-6">{practice_banner_sub_header}</h1>
        </Col>
      </Row>
    </div>
  )
}

export default function Practice() {
  const [weeklyProblems, setWeeklyProblems] = useState<WeeklyProblems | null>(null);
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      const { year, quarter } = getCurrentQuarterAndYear();

      const wp: WeeklyProblems = await client.fetch(
        `*[_type == "weeklyProblem" && year == $year && quarter == $quarter][0]{
          ...,
          ${[...Array(10)].map((_, i) => `week${i + 1}[]->`).join(',')}
        }`,
        { year, quarter }
      );

      const pres: Presentation[] = await client.fetch(
        `*[_type == "presentation" && quarter == $quarter]`,
        { quarter }
      );

      setWeeklyProblems(wp);
      setPresentations(pres);
    }



    fetchData();
  }, []);

  if (!weeklyProblems) return (
    <Loading></Loading>
  );

  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);




  return (
    <div>
      <PracticeBanner></PracticeBanner>
      <div className='practice_dropdown'>
        <Accordion defaultActiveKey="0">
          {weeks.map((weekNum, idx) => {
            const problems = weeklyProblems[`week${weekNum}`] || [];
            const presentation = presentations.find((p: any) => p.week === weekNum);

            return (
              <div className='practice_week rounded'>
                <h1>Week {weekNum}</h1>
                <Accordion.Item eventKey={String(idx)} key={weekNum}>
                  <Accordion.Header>{presentation?.title}</Accordion.Header>
                  <Accordion.Body>
                    <Row className="mb-3">
                      <Col xs={12} md={6}>
                        <h5>Topic: {presentation?.title}</h5>
                        <p>{presentation?.description || ""}</p>
                        {presentation?.url ? (
                          <a href={presentation.url} target="_blank" rel="noreferrer">
                            VIEW SLIDES
                          </a>
                        ) : (
                          ""
                        )}

                      </Col>
                      <Col>
                        <Col xs={12} md={6}>
                          <h5>Presentation:</h5>
                          <img
                            src={presentation?.image ? urlFor(presentation.image).url() : ""}
                            alt={presentation?.title}
                            className="responsive-presentation-img"
                          />
                        </Col>

                      </Col>
                    </Row>
                    <div className="practice_problem_wrapper">
                      <h6 style={{ textDecoration: "underline" }}>Practice Problems</h6>
                      <div style={{ height: "2vh" }}></div>
                      <ul>
                        {problems.map((problem: any) => {
                          const difficultyColor =
                            problem.difficulty?.toLowerCase() === "hard"
                              ? "red"
                              : problem.difficulty?.toLowerCase() === "medium"
                                ? "orange"
                                : problem.difficulty?.toLowerCase() === "easy"
                                  ? "green"
                                  : "inherit";

                          return (
                            <div>
                              <li key={problem._id}>
                                <a href={problem.url} target="_blank" rel="noreferrer">
                                  {problem.name}
                                </a>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: difficultyColor,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {problem.difficulty?.toUpperCase()}
                                </span>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
