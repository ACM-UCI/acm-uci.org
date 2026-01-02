import "../css/practice3.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { client } from "../sanity/client.ts";
import imageUrlBuilder from "@sanity/image-url";

import Loading from '../extra/Loading.tsx';

import { useLocation } from 'react-router-dom';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}


function getCurrentQuarterAndYear() {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth(); // 0 = Jan

  let quarter;
  if (month >= 8) quarter = '0'; // Sep-Dec → Fall
  else if (month >= 0 && month <= 2) quarter = '1'; // Jan-Mar → Winter
  else quarter = '2'; // Apr-Aug → Spring

  console.log(`deleting after but the year and quarter are ${year} ${quarter}`)

  // hardcoding for display purposes :D 
  year = 2025;
  quarter = '0';

  return { year, quarter };
}


const NAV_ITEMS = [
    { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn3secret" },
    { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice3secret" },
    { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete3secret" },
    { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board3secret" },
    { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];


export default function Practice3() {
    const navigate = useNavigate();

    const [activeNav, setActiveNav] = useState(null);
    const [sideOpen, setSideOpen] = useState(false);


  const [weeklyProblems, setWeeklyProblems] = useState(null);
  const [presentations, setPresentations] = useState([]);

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

      const wp = await client.fetch(
        `*[_type == "weeklyProblem" && year == $year && quarter == $quarter][0]{
          ...,
          ${[...Array(10)].map((_, i) => `week${i + 1}[]->`).join(',')}
        }`,
        { year, quarter }
      );

      const pres = await client.fetch(
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
  weeks.slice(0, 2),
  weeks.slice(2, 4),
  weeks.slice(4, 6),
  weeks.slice(6, 8),
  weeks.slice(8, 10)
];

const rows2 = [
    weeks.slice(0, 1),
  weeks.slice(1, 2),
  weeks.slice(2, 3),
  weeks.slice(3, 4),
  weeks.slice(4, 5),
    weeks.slice(5, 6),
  weeks.slice(6, 7),
  weeks.slice(7, 8),
  weeks.slice(8, 9),
  weeks.slice(9, 10)
]






    return (
        <div>
            <nav id="h3navbar">
                <div id="h3navbar-logo" onClick={() => { navigate('/home3secret') }} onMouseEnter={() => setActiveNav(null)}>
                    <h1>ACM</h1>
                    <img id="h3acmcenterlogo" src="home2/acm-uci.svg" />
                    <h1>UCI</h1>
                </div>

                <div
                    id="h3nav-dropdown"
                    onClick={() => setSideOpen(o => !o)}
                >
                    {sideOpen ? (
                        <div id="h3nav-close">✕</div>
                    ) : (
                        <>
                            <div id="h3dropdown-line" />
                            <div id="h3dropdown-line" />
                            <div id="h3dropdown-line" />
                        </>
                    )}
                </div>


                <div id="h3navbar-options">
                    {NAV_ITEMS.map((item, i) => (
                        <div
                            key={item.id}
                            id={item.id}
                            onMouseEnter={() => setActiveNav(i)}
                        >
                            <h1>{item.label}</h1>
                        </div>
                    ))}
                </div>

                {activeNav !== null && (
                    <div
                        id="h3navbar-popup"
                        style={{
                            left: `${activeNav * (window.innerWidth / 5)}px`,
                            display: "flex"
                        }}
                        onMouseLeave={() => setActiveNav(null)}
                    >
                        <a href={NAV_ITEMS[activeNav].href}>
                            {NAV_ITEMS[activeNav].text}
                        </a>
                    </div>
                )}
            </nav>

            <div
                id="h3side-panel-overlay"
                className={sideOpen ? "open" : ""}
                onClick={() => setSideOpen(false)}
            />

            <div
                id="h3side-panel"
                className={sideOpen ? "open" : ""}
            >
                {NAV_ITEMS.map(item => (
                    <div
                        key={item.id}
                        className="h3side-panel-item"
                        onClick={() => {
                            setSideOpen(false);
                            navigate('/' + item.href.slice(2));
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            <div id="p3-central-content">
                <img id="thinkingpng" src="practice2/thinking.png" />
                <div id="p3-central-content-container">
                    <div id="p3-cc-toprow">
                        <div id="p3-cc-h1">
                            <h1>Practice</h1>
                        </div>
                        <div id="p3-banana-image">
                        <img src="practice/practice_doodle.jpg"></img>
                    </div> 
                    </div>
                    <div id="p3-cc-bottomrow">
                        <h2>
                            New practice problems and presentations at <em>every</em> meeting
                            </h2>
                            <p>
                                Try your hand at the <em>easy</em> problems, then see how you fare with the <em>harder</em> ones!
                                
                            </p>
                    </div>

                </div>

            </div>

            <div id="altweekdisplay">
  {rows2.map((rowWeeks, rowIdx) => (
    <div key={rowIdx} id={`row${rowIdx + 1}`}>
      {rowWeeks.map((weekNum) => {
        const presentation = presentations.find(
          (p) => p.week === weekNum
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

        <div id="weekdisplay">
  {rows.map((rowWeeks, rowIdx) => (
    <div key={rowIdx} id={`row${rowIdx + 1}`}>
      {rowWeeks.map((weekNum) => {
        const presentation = presentations.find(
          (p) => p.week === weekNum
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



    )
}