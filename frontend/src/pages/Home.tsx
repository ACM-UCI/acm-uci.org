import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpinningImage from '../extra/SpinningImage';


import "../scss/global.scss"

function TopBanner() {

  // definitely going to replace with custom image 
  let top_banner_images: any = ["/home/top_banner/anteater.png", "/home/top_banner/chili.png",
    "/home/top_banner/pizza.png", "/home/top_banner/acm_monster.png", "/home/top_banner/banana.png",
    "/home/top_banner/computer.png", "/home/top_banner/squirrel.png"]

  return (
    <div className="banner_header_wrapper">
      {top_banner_images.map((image: string, index: number) => (
        <SpinningImage key={index} src={import.meta.env.BASE_URL + image} />
       
      ))}
    </div>
  );
}

 //<img key={index} src={import.meta.env.BASE_URL + image} className="top_banner_image" />
function WhatIsACM() {
  let what_is_acm = "What Is ACM?"
  let acm_short_description = "ACM@UCI is UCI’s official competitive programming club on campus."
  let acm_meeting_time_loc = "Meetings are every Wednesday from 6pm to 8pm in DBH 3011"

  let acm_with_balloons = import.meta.env.BASE_URL + "/home/what_is_acm/acm_balloons_doodle.png"

  return (
<div className="custom_font what_is_acm_wrapper shadow rounded">
  <Row className="align-items-center">
    {/* Title always on top */}
    <Col xs={12} className="order-1 text-center text-md-start">
      <h1 className="font-size-14 what_is_acm_title">{what_is_acm}</h1>
    </Col>

    {/* Image (on mobile: comes second) */}
    <Col xs={12} md={6} className="order-2 order-md-2 d-flex justify-content-center">
      <img
        src={acm_with_balloons}
        className="what_is_acm_image img-fluid"
        alt="ACM with balloons"
      />
    </Col>

    {/* Rest of text (on mobile: comes after image) */}
    <Col xs={12} md={6} className="order-3 order-md-1 text-md-start">
      <div className="what_is_acm_text">
        <div style={{ height: "4vh" }}></div>
        <h1 className="font-size-6">{acm_short_description}</h1>
        <hr />
        <h1 className="font-size-6">{acm_meeting_time_loc}</h1>
        <div style={{ height: "8vh" }}></div>
      </div>
    </Col>
  </Row>
</div>



  );
}

function ProgrammingLanguageDisplay() {

  let programming_language_images: any = [
    "/home/programming_languages/Go.png",
    "/home/programming_languages/Ruby_logo.svg.png",
    "/home/programming_languages/JS.png",
    "/home/programming_languages/Rust.png",
    "/home/programming_languages/Cpp.png",
    "/home/programming_languages/Kotlin.png",
    "/home/programming_languages/Csharp.png",
    "/home/programming_languages/Python_logo_01.svg"
  ];

  return (
    <div className="programming_language_wrapper">
      {programming_language_images.map((url: string, id: number) => (
        <React.Fragment key={id}>
          <img src={import.meta.env.BASE_URL + url} className="programming_language_image" />
          {id < programming_language_images.length - 1 && (
            <div className="vertical_spacer" />
          )}
        </React.Fragment>
      ))}
    </div>

  )

}

function MissionStatement() {

  // can have mission statement (and other interchable text) be defined and imported from a messages file
  let our_mission = "OUR MISSION"
  let mission_statement = "ACM@UCI is UCI's official competitive programming club, where coders of all kinds — those passionate about competitive programming, trying to get through technical interviews, or hoping to apply what they learn in their algorithms class — come together and solve problems! Each week, we host informative presentations on various topics in data structures and algorithms, including the divide and conquer paradigm, dynamic programming, and greedy algorithms. We also hold practice sessions so that members can internalize the concepts we cover. Sometimes, we host friendly programming contests for our members as well!"

  return (
    <div className="mission_statement_wrapper">
      <h1 className="font-size-12">{our_mission}</h1>
      <h1 className="custom_paragraph_font2 font-size-3">{mission_statement}</h1>
    </div>
  )
}

function ClubPreview() {
  let club_preview_header = "Come Check Us Out!"

  // maybe today - images and text defined in a separate document (then just import all and like src=images.newcomer_img, etc)
  let newcomers_img = import.meta.env.BASE_URL + "/home/club_preview/newcomers.jpg"
  let newcomers_text = "To start competitive programming, begin by learning a programming language, preferably C++, Java, or Python."

  let leetcode_img = import.meta.env.BASE_URL + "/home/club_preview/leetcode.webp"
  let codeforces_img = import.meta.env.BASE_URL + "/home/club_preview/codeforces.png"
  let practice_text = "Practice on platforms like Codeforces, LeetCode, or Kattis, focusing on solving problems of increasing difficulty."

  let compete_img = import.meta.env.BASE_URL + "/home/club_preview/compete.png"
  let compete_text = "Every year, ACM takes its top members to participate in the International Collegiate Programming Competition (ICPC). Tryouts open in the Fall."

  return (
     <div className="club_preview_wrapper">
  <h1 className="font-size-8 text-start">{club_preview_header}</h1>

  {/* Newcomers */}
  <div className="cp_newcomer_wrapper rounded">
    <h1 className="font-size-8 text-start">Newcomers</h1>
    <Row className="align-items-center cp_section">
      <Col xs={12} md={4}>
        <img src={newcomers_img} className="img-fluid" alt="Newcomers" />
      </Col>
      <Col xs={12} md={8} className="text-end">
        <div className="cp_text font-size-4">
          <h1 className="font-size-4 custom_paragraph_font">{newcomers_text}&nbsp;</h1>
          <a href={import.meta.env.BASE_URL + "/#learn" + "#top"}>LEARN MORE</a>
        </div>
      </Col>
    </Row>
  </div>

  {/* Practice */}
  <div className="cp_practice_wrapper rounded">
    <h1 className="font-size-8 text-start">Practice</h1>
    <Row className="align-items-center cp_section">
      <Col xs={12} md={8} className="text-start">
        <div className="cp_text font-size-4">
          <h1 className="custom_paragraph_font font-size-4">{practice_text}&nbsp;</h1>
          <a href={import.meta.env.BASE_URL + "/#practice" + "#top"}>READ MORE</a>
        </div>
      </Col>
      <Col xs={12} md={4} className="d-flex justify-content-center">
        <img src={leetcode_img} className="img-fluid me-2 practice-img" alt="LeetCode" />
        <img src={codeforces_img} className="img-fluid practice-img" alt="Codeforces" />
      </Col>
    </Row>
  </div>

  {/* Compete */}
  <div className="cp_compete_wrapper rounded">
    <h1 className="font-size-8 text-start">Compete</h1>
    <Row className="align-items-center cp_section">
      <Col xs={12} md={4}>
        <img src={compete_img} className="compete-img img-fluid" alt="Compete" />
      </Col>
      <Col xs={12} md={8} className="text-end">
        <div className="cp_text font-size-4">
          <h1 className="custom_paragraph_font font-size-4">{compete_text}&nbsp;</h1>
          <a href={import.meta.env.BASE_URL + "/#compete" + "#top"}>SEE MORE</a>
        </div>
      </Col>
    </Row>
  </div>
</div>

  );


}

function OurTeam() {
  let our_team = "OUR TEAM"
  let team_shoutout = "The club wouldn’t be possible without all our amazing board members and advisors. Check them out here!   "

  let team_symbol = import.meta.env.BASE_URL + "/home/our_team/team_icon.jpg"

  return (
<div className="our_team_wrapper">
  <h1 className="font-size-8">{our_team}</h1>
  <div className="our_team_row">
    <img src={team_symbol} alt="" className="team_symbol" />
    <h1 className="font-size-4">
      {team_shoutout}{" "}
      <a href={import.meta.env.BASE_URL + "/#board" + "#top"}>VIEW BOARD</a>
    </h1>
    <img src={team_symbol} alt="" className="team_symbol" />
  </div>
</div>


  );
}

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <TopBanner></TopBanner>
      <WhatIsACM></WhatIsACM>
      <ProgrammingLanguageDisplay></ProgrammingLanguageDisplay>
      <MissionStatement></MissionStatement>
      <ClubPreview></ClubPreview>
      <OurTeam></OurTeam>
    </div>
  );
}