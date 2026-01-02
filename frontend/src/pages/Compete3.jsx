import "../css/compete3.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";






const NAV_ITEMS = [
  { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn" },
  { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice" },
  { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete" },
  { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board" },
  { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];


export default function Compete3() {
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);


  return (
    <div>
      <nav id="h3navbar">
        <div id="h3navbar-logo" onMouseEnter={() => setActiveNav(null)}>
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


      <div id="c3-central-content">
        <img id="competepng" src="compete2/competebg.png" />
        <div id="c3-central-content-container">
          <div id="c3-cc-toprow">
            <div id="c3-cc-h1">
              <h1>Compete</h1>
            </div>
            <div id="c3-banana-image">
              <img src="compete/compete_doodle.jpg"></img>
            </div>
          </div>
          <div id="c3-cc-bottomrow">
            <h2>
              Achieve <em>fame</em> and <em>victory</em> by competing at ICPC</h2>
            <p>
              Fame and victory not guaranteed. <em>FUN</em> is though!

            </p>
          </div>

        </div>

      </div>


      <div id="c3-main">
        <div id="c3-whatis">
          <h1>What is ICPC?</h1>
          <p>ICPC is an algorithmic programming contest for college students all around the world. With access to only one computer, teams of three race against each other to solve these problems as fast as possible in order to advance to the next rounds.</p>
        </div>
        <div id="c3-involve">
          <h1>How do I get Involved?</h1>
          <div id="c3-involve-content">
            <div id="c3-alt-involve-images">
              <img src="/compete2/goats.jpg"></img>
            </div>
            <div id="c3-involve-images">
              <div id="c3-left-image">
                <img src="/compete2/kattislogo.png"></img>
              </div>
              <div id="c3-right-images">
                <div id="ria">
                  <img src="/compete2/goats.jpg"></img></div>
                <img id="rib" src="/compete2/icpc.png"></img>
              </div>
            </div>
            <div id="c3-involve-text">
              <p>We have tryouts during the Fall and Spring quarters where students simulate the actual contest environment by getting into teams of 3 and solving as many problems as they can in a 2 hour window. Tryouts are typically held on Kattis or Codeforces.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="heardof">
        <div id="heardofcodeforces">
          <h2>Heard of Codeforces?</h2>
          <p>Codeforces is a website that hosts competitive programming contests and provides a platform for programmers to improve their skills. It's a social and educational platform where users can participate in contests, discuss problems, and learn from each other.</p>
          <p>Codeforces ratings are determined by the ELO you get through winning contests.</p>
          <div id="codeforcestable">
            <table >
              <thead>


                <tr>
                  <th>Legendary Grandmaster</th>
                  <th>International Grandmaster</th>
                  <th>Grandmaster</th>
                  <th>International Master</th>
                  <th>Master</th>
                  <th>Candidate Master</th>
                  <th>Expert</th>
                  <th>Specialist</th>
                  <th>Apprentice</th>
                  <th>Pupil</th>
                  <th>Newbie</th>


                </tr>
              </thead>
              <tbody>
                <tr><td>
                  3000+</td><td>2700-2999</td>
                  <td>2400-2699</td><td>2200-2399</td>
                  <td>2000-2199</td><td>1800-1999</td>
                  <td>1600-1799</td><td>1400-1599</td>
                  <td>1200-1399</td><td>1000-1199</td>
                  <td>Up to 999</td>
                </tr>
              </tbody>
            </table>
</div>
            <table id="alttable">
              <tbody>
                <tr>
                  <th>Legendary Grandmaster</th>
                  <td>3000+</td>
                </tr>
                <tr>
                  <th>International Grandmaster</th>
                  <td>2700–2999</td>
                </tr>
                <tr>
                  <th>Grandmaster</th>
                  <td>2400–2699</td>
                </tr>
                <tr>
                  <th>International Master</th>
                  <td>2200–2399</td>
                </tr>
                <tr>
                  <th>Master</th>
                  <td>2000–2199</td>
                </tr>
                <tr>
                  <th>Candidate Master</th>
                  <td>1800–1999</td>
                </tr>
                <tr>
                  <th>Expert</th>
                  <td>1600–1799</td>
                </tr>
                <tr>
                  <th>Specialist</th>
                  <td>1400–1599</td>
                </tr>
                <tr>
                  <th>Apprentice</th>
                  <td>1200–1399</td>
                </tr>
                <tr>
                  <th>Pupil</th>
                  <td>1000–1199</td>
                </tr>
                <tr>
                  <th>Newbie</th>
                  <td>Up to 999</td>
                </tr>
              </tbody>
            </table>


        </div>
        <div id="heardofics80">
          <h2>Heard of ICS 80?</h2>
          <p>I&C SCI 80 is a special 2 unit course designed to teach the basics of problem solving for competitive programming. The course had its initial trail run in Spring of 2025, and was offered again in the Fall.</p>
        </div>
        <div id="stillnotsatisfied">
          <h2>Still Not Satisified?</h2>
          <p>Check out our <a href="/#learn">learn</a> tab for additional resources and our <a href="/#practice">practice</a> tab for presentations and practice problems!</p>
        </div>
      </div>
      <div id="c3-hall_of_champions">
        <h1>Hall of Champions<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
</svg></h1>
        <p>In the past, UCI has notably well (queue the World Finals photos...)</p>
        <div id="c3-hoc_content">
          <div id="c3-hoc_carousel">
            <Carousel className="c3-carousel">
              <Carousel.Item>
                <img
                  src={"/compete/hall_of_champions/icpc00.jpg"}
                  className="c3-carousel_image"
                />
                <Carousel.Caption>
                  <p>ICPC 2014 - Ekaterinburg, Russia</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={"/compete/hall_of_champions/icpc01.jpg"}
                  className="c3-carousel_image"
                />
                <Carousel.Caption>
                  <p>ICPC 2017 - Rapid City, USA</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={"/compete/hall_of_champions/icpc1.jpg"}
                  className="c3-carousel_image"
                />
                <Carousel.Caption>
                  <p>ICPC 2023 - Luxor, Egypt</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={"/compete/hall_of_champions/icpc2.jpg"}
                  className="c3-carousel_image"
                />
                <Carousel.Caption>
                  <p>ICPC 2024 - Astana, Kazakhstan</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={"/compete/hall_of_champions/icpc3.jpg"}
                  className="c3-carousel_image"
                />
                <Carousel.Caption>
                  <p>ICPC 2024 - Astana, Kazakhstan (walking)</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className='c3-champions_side_info'>
              <h3>Some of our more recent past champions include:</h3>
              <ul>
                <li>
                  Jerry Li (graduated)
                </li>
                <li>
                  Thomas Neil (graduated)
                </li>
                <li>
                  Elijah Huang (4th year)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="c3-additional-resources">
        <h1>Additional Resources</h1>
        <p>ICPC Main Website: &nbsp;<a href="https://icpc.global">https://icpc.global</a></p>
        <p>Past ICPC Problems:&nbsp;<a href="https://icpc.global/worldfinals/past-problems">https://icpc.global/worldfinals/past-problems</a></p>
        <p>2023 World Finals Article:&nbsp;<a href="https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/">https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/</a></p>
      </div>
    </div>



  )
}