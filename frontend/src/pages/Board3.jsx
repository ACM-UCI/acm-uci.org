import "../css/board3.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';

import { Row, Col, Container } from "react-bootstrap";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import { useLocation } from "react-router-dom";


const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);


const NAV_ITEMS = [
  { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn" },
  { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice" },
  { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete" },
  { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board" },
  { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];


export default function Board() {
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);

  const [members, setMembers] = useState([]);

  /* another time... */
  const [b3ActiveMascot, setB3ActiveMascot] = useState(null);
  const [b3BubbleX, setB3BubbleX] = useState(0);
  const [b3BubbleY, setB3BubbleY] = useState(0);

  
  function handleMascotEnter(e, member_title) {
    if (member_title in quotes) {

      const rect = e.currentTarget.getBoundingClientRect();

      setB3BubbleX(rect.x + 300);
      setB3BubbleY(rect.y + 100);
      setB3ActiveMascot(member_title);
    }
  }

  const quotes = {
    "Effie": "Everything is greedy. If it's not, that's just greedy plus regret.",
    "Cindy": "If you're thinking about greedy, you're actually thinking about (gree)dynamic programming"
  }







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
      {/* maybe later... bugs...!
      {b3ActiveMascot != null &&
        <div id="b3-speech-bubble" style={{ left: b3BubbleX, top: b3BubbleY }}>
          <img id="b3-sb-bg" src="home2/chat-bubble.png" />
          <p>{quotes[b3ActiveMascot]}</p></div>} */}
      <nav id="h3navbar">
                <div id="h3navbar-logo" onClick={() => { navigate('/') }} onMouseEnter={() => setActiveNav(null)}>
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


      <div id="b3-central-content">
        <img id="boardpng" src="board2/boardlightbulb.png" />
        <div id="b3-central-content-container">
          <div id="b3-cc-toprow">
            <div id="b3-cc-h1">
              <h1>Board</h1>
            </div>
            <div id="b3-board-image">
              <img src="board/board_doodle.jpg"></img>
            </div>
          </div>
          <div id="b3-cc-bottomrow">
            <h2>
              ACM @ UCI wouldn’t be <em>possible</em> without our hardworking board members
            </h2>
            <p>
              Check out the <em>agents</em> of ACM below, and if you’re interested, get involved and join the team!


            </p>
          </div>

        </div>
      </div>
      <div id="b3-main">




        <Executive handleQuote={handleMascotEnter} setB3Mascot={setB3ActiveMascot} members={executive} />
        <div className="board-line1"></div>
        <Supporting handleQuote={handleMascotEnter} setB3Mascot={setB3ActiveMascot} members={support} />
        <div className="board-line2"></div>
        <Advisory handleQuote={handleMascotEnter} setB3Mascot={setB3ActiveMascot} members={advisory} />
        <div className="quotes-section">
          <h3>Quotes from the Board:</h3>
          <hr></hr>
          {Object.entries(quotes).map(([person, quote]) => (
            <div><p>{person}: "{quote}"</p></div>))}
         
        </div>
      </div>



    </div>






  )
}


function MemberCard({ member, handleQuote, setB3Mascot }) {
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
    <div className="member-card-wrapper" >
{/* maybe later onMouseEnter={(e) => handleQuote(e, member['position'])}
        onMouseLeave={() => setB3Mascot(null)} */}

      <div  className="member-card"
      >
        <div className="member-image-wrapper"         >
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
    </div>
  );
}

const Executive = ({ members, handleQuote, setB3Mascot }) => (
  <div className="b3-executive_wrapper my-5">

    <h1 className="section-title">Executive Staff</h1>
    <div className="b3-executive_staff mt-4">

      {members.map((m, i) => (
        <MemberCard handleQuote={handleQuote} setB3Mascot={setB3Mascot} member={m} />
      ))}
    </div>
  </div>
);

const Supporting = ({ members, handleQuote, setB3Mascot }) => (
  <div className="b3-supporting_wrapper my-5">

    <h1 className="section-title">Supporting Staff</h1>
    <div className="b3-supporting_staff mt-4">

      {members.map((m, i) => (
        <MemberCard handleQuote={handleQuote} setB3Mascot={setB3Mascot} member={m} />
      ))}
    </div>
  </div>
);

const Advisory = ({ members, handleQuote, setB3Mascot }) => (
  <div className="b3-advisory_wrapper my-5">
    <h1 className="section-title">Advisors</h1>
    <div className="b3-advisors mt-4">
      {members.map((m, i) => (
        <MemberCard handleQuote={handleQuote} setB3Mascot={setB3Mascot} member={m} />
      ))}
    </div>
  </div>
);
