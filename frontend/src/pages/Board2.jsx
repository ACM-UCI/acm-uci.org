// Board.jsx

import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import { useLocation } from "react-router-dom";

import "../css/board2.css";

function BoardBanner() {
  const board_doodle = "/board/board_doodle.jpg";
  const board_banner_main_header =
    "ACM @ UCI wouldn’t be possible without our hardworking board members";
  const board_banner_sub_header =
    "Check out the AGENTS of ACM below, and if you’re interested, get involved and join the team!";

  return (
    <div
      id="board-top"
      className="board_banner_wrapper d-flex justify-content-center align-items-center"
    >
      <Row className="align-items-center">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <img
            src={board_doodle}
            className="subpage_banner_image fluid"
          />
        </Col>
        <Col xs={12} md={8} className="text-left">
          <h1 className="static-font-size-10">{board_banner_main_header}</h1>
          <h1 className="static-font-size-6">{board_banner_sub_header}</h1>
        </Col>
      </Row>
    </div>
  );
}

function ThankYouMessage() {
  const confetti_right = "/board/confetti_right.png";
  const confetti_left = "/board/confetti_left.png";
  const thank_you_message =
    "Thank you to all past board members for building the foundation of ACM @ UCI and to any and all individuals who managed to stop by - even for just a single meeting!";

  return (
    <div className="thank_you_message">
      <img src={confetti_left} className="board_confetti left" />
      <h1 className="font-size-4 text-center thank_you_text">
        {thank_you_message}
      </h1>
      <img src={confetti_right} className="board_confetti right" />
    </div>
  );
}

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default function Board() {
  const location = useLocation();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "boardMember"]{
          name,
          position,
          image,
          linkedin,
          group
        }`
      )
      .then(setMembers)
      .catch(console.error);
  }, []);

  const executive = ["president", "internal-vp", "external-vp", "treasurer"].map(
    (pos) => members.find((m) => m.position === pos)
  );

  const support = [
    "secretary",
    "events-coordinator",
    "problem-writer",
    "webmaster",
  ].map((pos) => members.find((m) => m.position === pos));

  const advisory = ["faculty-advisor", "advisor-of-competition"].map((pos) =>
    members.find((m) => m.position === pos)
  );

  return (
    <div>
      <Container>
        <Executive members={executive} />
        <Supporting members={support} />
        <Advisory members={advisory} />
      </Container>
    </div>
  );
}

function MemberCard({ member }) {
  if (!member) return null;

  const formatPosition = (position) => {
    const pos = position.replace(/-/g, " ");
    if (/internal vp/i.test(pos)) return "Internal VP";
    if (/external vp/i.test(pos)) return "External VP";
    return pos.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img
          src={urlFor(member.image).url()}
          alt={member.name}
          className="member-card-img"
        />
      </div>

      <div className="member-info">
        <h1 className="member-name">{member.name}</h1>
        <h1 className="member-position">
          {formatPosition(member.position)}
        </h1>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/board/linkedin.png"
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
      </div>
    </div>
  );
}

const Executive = ({ members }) => (
  <div className="executive_wrapper my-5">
    <Col>
      <h1 className="section-title">Executive Staff</h1>
      <div className="executive_staff mt-4">
        <Row>
          {members.map((m, i) => (
            <Col key={i} xs={12} sm={12} md={3}>
              <MemberCard member={m} />
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  </div>
);

const Supporting = ({ members }) => (
  <div className="supporting_wrapper my-5">
    <Col>
      <h1 className="section-title">Supporting Staff</h1>
      <div className="supporting_staff mt-4">
        <Row>
          {members.map((m, i) => (
            <Col key={i} xs={12} sm={12} md={3}>
              <MemberCard member={m} />
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  </div>
);

const Advisory = ({ members }) => (
  <div className="advisory_wrapper my-5">
    <Col>
      <h1 className="section-title">Advisors</h1>
      <div className="advisors mt-4">
        <Row>
          {members.map((m, i) => (
            <Col key={i} xs={12} md={6}>
              <MemberCard member={m} />
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  </div>
);
