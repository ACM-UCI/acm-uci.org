// FULL DISCLOSURE - used ChatGPT and old ACM website to make the fetching function TOT
// manually doing it is a pain

import { Accordion, Row, Col } from 'react-bootstrap';
import { client } from "../sanity/client.ts";
import { useState, useEffect } from "react"
import type { WeeklyProblems, Presentation } from '../extra/types.ts';
import "../scss/global.scss"
import imageUrlBuilder from "@sanity/image-url";
import "../css/practice2.css";

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
  let practice_doodle = "/practice/practice_doodle.jpg";
  let practice_banner_main_header = "New practice problems and presentations at every meeting"
  let practice_banner_sub_header = "Try your hand at the easy problems, then see how you fare with the harder ones!"

  return (
    <div id="practice-top" className="practice_banner_wrapper d-flex justify-content-center align-items-center">
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

  const presentationByWeek = new Map(
  presentations.map(p => [p.week, p])
);

const rows = [
  weeks.slice(0, 4),
  weeks.slice(4, 8),
  weeks.slice(8, 10),
];




  return (
    <div>
      <div className='practice_dropdown'>
        <div id="weekdisplay">
  {rows.map((rowWeeks, rowIdx) => (
    <div key={rowIdx} id={`row${rowIdx + 1}`}>
      {rowWeeks.map((weekNum) => {
        const presentation = presentations.find(
          (p: any) => p.week === weekNum
        );

        if (!presentation) return null;

        return (
          <div key={weekNum} id={`week${weekNum}`} className="week-card">
            <div className="week-card-inner">
              
              {/* FRONT */}
              <div className="week-card-front">
                <img
                  className="weekimg"
                  src={
                    presentation.image
                      ? urlFor(presentation.image).url()
                      : ""
                  }
                  alt={presentation.title}
                />
                <h3>Week {weekNum}</h3>
                <p>{presentation.title}</p>
              </div>

              {/* BACK */}
              <div className="week-card-back">
                <p>{presentation.description}</p>
                {presentation.url && (
                  <a
                    href={presentation.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW SLIDES
                  </a>
                )}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
