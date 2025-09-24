import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

import "../scss/global.scss"


function CompeteBanner() {
let compete_doodle = import.meta.env.BASE_URL + "/compete/compete_doodle.jpg";
let compete_banner_main_header = "Achieve fame and victory by competing at ICPC";
let compete_banner_sub_header = "Fame and victory not guaranteed. FUN is though!";

return (
  <div id="top" className="compete_banner_wrapper d-flex justify-content-center align-items-center">
    <Row className="align-items-center">
      <Col xs={12} md={8} className="text-left">
        <h1 className="static-font-size-10">{compete_banner_main_header}</h1>
        <h1 className="static-font-size-6">{compete_banner_sub_header}</h1>
      </Col>
      <Col xs={12} md={4} className="d-flex justify-content-center">
        <img src={compete_doodle} className="subpage_banner_image"></img>
      </Col>
    </Row>
  </div>
);

}

function WhatIsICPC() {

  let icpc_description = "ICPC is an algorithmic programming contest for college students all around the world. With access to only one computer, teams of three race against each other to solve these problems as fast as possible in order to advance to the next rounds."

  return (
    <div className="icpc_wrapper">
      <h1 className="font-size-10">What is ICPC?</h1>
      <div className="icpc_desc_wrapper">
        <h1 className="custom_paragraph_font2 font-size-3">{icpc_description}</h1>
      </div>
    </div>
  )
}

function Involvement() {
  let involvement_description = "We have tryouts during the Fall and Spring quarters where students simulate the actual contest environment by getting into teams of 3 and solving as many problems as they can in a 2 hour window. Tryouts are typically held on Kattis or Codeforces.";
  let involvement_image = import.meta.env.BASE_URL + "/compete/involvement.png";

  return (
    <div className="involvement_wrapper">
      <h1 className="font-size-10">How do I get Involved?</h1>
      <Row className="align-items-center">
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <img src={involvement_image} className="img-fluid" />
        </Col>
        <Col xs={12} md={4} className="text-start">
        <div className="rounded icpc_involve_desc_wrapper">
          <h1 className=" custom_paragraph_font2 font-size-3">{involvement_description}</h1>
        </div>
        </Col>
      </Row>
    </div>
  );
}

function CodeforcesShoutOut() {

  let codeforces_description = "Codeforces is a website that hosts competitive programming contests and provides a platform for programmers to improve their skills. It's a social and educational platform where users can participate in contests, discuss problems, and learn from each other.";

  let codeforces_ratings = "Codeforces ratings are determined by the ELO you get through winning contests.";

  let codeforces_image = import.meta.env.BASE_URL + "/compete/codeforces.png";

  return (
    <div className="codeforces_shoutout_wrapper">
      <h1 className="font-size-6">Heard of Codeforces?</h1>
      <h1 className="custom_paragraph_font2 font-size-3">{codeforces_description}</h1>
      <h1 className="custom_paragraph_font2 font-size-3">{codeforces_ratings}</h1>
      <img src={codeforces_image} className='codeforces_image'></img>
    </div>
  )

}

function ICS80ShoutOut() {
  let ics80_description = "I&C SCI 80 is a special 2 unit course designed to teach the basics of problem solving for competitive programming. The course had its initial trail run in Spring of 2025, and will be offered again in the Fall.";
  return (
    <div className="ics80_wrapper">
      <h1 className="font-size-6">Heard of ICS 80?</h1>
      <h1 className=" custom_paragraph_font2 font-size-3">{ics80_description}</h1>
    </div>
  )
}

function NotSatisfied() {

  return (
    <div className="not_satisfied_wrapper">
      <h1 className="font-size-6">Still Not Satisified?</h1>
      <h1 className=" custom_paragraph_font2 font-size-3">Check out our <a href={import.meta.env.BASE_URL + "/#learn" + "#top"}>learn</a> tab for additional resources and our <a href={import.meta.env.BASE_URL + "/#practice" + "#top"}>practice</a> tab for presentations and practice problems!</h1>
    </div>
  );

}

function HallOfChampions() {

  let hall_of_champions_blurb =   "In the past, UCI has done pretty well, even making it to World Finals occasionally!";


  return (
    <div className="hall_of_champions_wrapper">
      <h1 className="font-size-10">Hall of Champions</h1>
      <h1 className="custom_paragraph_font2 font-size-3">{hall_of_champions_blurb}</h1>
      <div className="hoc_carousel_wrapper">
      <Row className="align-items-center">
        <Col xs={12} md={9} className="d-flex justify-content-center">
          <Carousel className="hoc_carousel">
                        <Carousel.Item>
              <img
                src={import.meta.env.BASE_URL + "/compete/hall_of_champions/icpc00.jpg"}
                className="carousel_image"
              />
              <Carousel.Caption>
                <p>ICPC 2014 - Ekaterinburg, Russia</p>
              </Carousel.Caption>
            </Carousel.Item>

                        <Carousel.Item>
              <img
                src={import.meta.env.BASE_URL + "/compete/hall_of_champions/icpc01.jpg"}
                className="carousel_image"
              />
              <Carousel.Caption>
                <p>ICPC 2017 - Rapid City, USA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={import.meta.env.BASE_URL + "/compete/hall_of_champions/icpc1.jpg"}
                className="carousel_image"
              />
              <Carousel.Caption>
                <p>ICPC 2023 - Luxor, Egypt</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={import.meta.env.BASE_URL + "/compete/hall_of_champions/icpc2.jpg"}
                className="carousel_image"
              />
              <Carousel.Caption>
                <p>ICPC 2024 - Astana, Kazakhstan</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={import.meta.env.BASE_URL + "/compete/hall_of_champions/icpc3.jpg"}
                className="carousel_image"
              />
              <Carousel.Caption>
                <p>ICPC 2024 - Astana, Kazakhstan (walking)</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={3}>
          <div className='champions_side_info'>
            <h1 className="font-size-4">Some of our more recent past champions include:</h1>
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
        </Col>
      </Row>
      </div>
    </div>
  );
}

function AdditionalResources() {
  return (
    <div className='additional_resources_wrapper'>
      <h1 className="font-size-6">Additional Resources</h1>
      <h1 className="custom_paragraph_font2 font-size-3">ICPC Main Website:&nbsp;
        <a href="https://icpc.global">https://icpc.global</a>
      </h1>
      <h1 className="custom_paragraph_font2 font-size-3">Past ICPC Problems:&nbsp;
        <a href="https://icpc.global/worldfinals/past-problems">https://icpc.global/worldfinals/past-problems</a>
      </h1>
      <h1 className="custom_paragraph_font2 font-size-3">2023 World Finals Article:&nbsp;
        <a href="https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/">https://ics.uci.edu/2023/06/23/uc-irvine-to-compete-at-world-finals-of-the-international-collegiate-programming-contest/ </a>
      </h1>
    </div>
  )
}



export default function Compete() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

  return (
    <div>
      <CompeteBanner></CompeteBanner>
      <div className="compete_page_wrapper">
        <WhatIsICPC></WhatIsICPC>
        <Involvement></Involvement>
        <CodeforcesShoutOut></CodeforcesShoutOut>
        <ICS80ShoutOut></ICS80ShoutOut>
        <NotSatisfied></NotSatisfied>
        <HallOfChampions></HallOfChampions>
        <AdditionalResources></AdditionalResources>
      </div>
    </div>
  );
}