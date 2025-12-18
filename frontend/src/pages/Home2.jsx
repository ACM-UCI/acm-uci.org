import "../css/home2.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- DATA ---------------- */

const NAV_ITEMS = [
  { id: "learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/learn" },
  { id: "practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/practice" },
  { id: "compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/compete" },
  { id: "board-nav", label: "BOARD", text: "Meet the Board!", href: "/board" },
  { id: "contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/contact" }
];

const SPEECH_LOGOS = [
  "home2/cpp.png",
  "home2/python.svg",
  "home2/java.webp",
  "home2/kotlin.png"
];

/* ---------------- COMPONENT ---------------- */

export default function Home2() {
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState(null);
  const [fade, setFade] = useState(false);
  const [activeMascot, setActiveMascot] = useState(null);
  const [bubbleX, setBubbleX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFade(f => !f), 5000);
    return () => clearInterval(interval);
  }, []);

  function handleMascotEnter(e, id) {
    const rect = e.currentTarget.getBoundingClientRect();
    setBubbleX(rect.x + 50);
    setActiveMascot(id);
  }

  return (
    <div id="home2">

      {/* ---------------- NAVBAR ---------------- */}

      <nav id="navbar">
        <div id="navbar-logo" onMouseEnter={() => setActiveNav(null)}>
          <h1>ACM</h1>
          <img id="acmcenterlogo" src="home2/acm-uci.svg" />
          <h1>UCI</h1>
        </div>

        <div id="nav-dropdown">
          <div id="dropdown-line" />
          <div id="dropdown-line" />
          <div id="dropdown-line" />
        </div>

        <div id="navbar-options">
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
            id="navbar-popup"
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

      {/* ---------------- HERO ---------------- */}

      <div id="home-central-content">
        <img src="home2/acmbackground.png" />
        <div id="central-content-div">
          <div id="cc-header-div">
            <h1>ACM @ UCI</h1>
          </div>
          <div id="cc-paragraph-div">
            <p>Meetings in DBH 4011</p>
            <p>Wednesdays 6pm – 8pm</p>
          </div>
        </div>
      </div>

      {/* ---------------- IMAGE PREVIEW ---------------- */}

      <div id="acm-preview">
        <div id="left-preview-images">
          <div id="top-left-preview-images">
            <div className="image-fader">
              <img className="image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teama.jpg" />
              <img className="image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/AIF.jpg" />
            </div>
            <div className="image-fader">
              <img className="image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/effieteam.jpg" />
              <img className="image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/randomday.jpg" />
            </div>
          </div>

          <div id="bottom-left-preview-images">
            <div className="image-fader">
              <img className="image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teamjab.jpg" />
              <img className="image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/elijahbijection.jpg" />
            </div>
            <div className="image-fader">
              <img className="image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/Bteam.jpg" />
              <img className="image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/fullicpc.jpg" />
            </div>
          </div>
        </div>

        <div id="right-acm-logo">
          <img src="home2/acm-uci.svg" />
        </div>
      </div>

      {/* ---------------- SPEECH BUBBLE ---------------- */}

      {activeMascot !== null && (
        <div id="speech-bubble" style={{ left: bubbleX }}>
          <img id="sb-bg" src="home2/chat-bubble.png" />
          <img id="sb-pl" src={SPEECH_LOGOS[activeMascot]} />
        </div>
      )}

      {/* ---------------- MASCOTS ---------------- */}

      <div id="favorite-programming-language">
        <div id="favorite-programming-language-bottom">
          <div id="mascots">
            {["chili.png", "squirrel.png", "anteater.png", "banana.png"].map(
              (img, i) => (
                <img
                  key={img}
                  src={`home2/${img}`}
                  onMouseEnter={(e) => handleMascotEnter(e, i)}
                  onMouseLeave={() => setActiveMascot(null)}
                />
              )
            )}
          </div>

          <div id="question-to-mascots">
            <h1>
              What's your Favorite Programming Language?{" "}
              <span>(hover over a guy)</span>
            </h1>
          </div>
        </div>
      </div>

      <div id="before-final-spacer" />

      {/* ---------------- FINAL SECTION ---------------- */}

      <div id="final-section">
        <div id="learn-link">
          <img src="home2/learn.jpg" />
          <div id="learn-text">
            <h1>LEARN</h1>
            <p>Start competitive programming with C++, Java, or Python.</p>
            <button onClick={() => navigate("/learn")}>VIEW</button>
          </div>
        </div>

        <div id="practice-link">
          <img src="home2/twosum.png" />
          <div id="practice-text">
            <h1>PRACTICE</h1>
            <p>Solve problems on Codeforces, LeetCode, and Kattis.</p>
            <button onClick={() => navigate("/practice")}>VIEW</button>
          </div>
        </div>

        <div id="compete-link">
          <img src="home2/competition.jpg" />
          <div id="competition-text">
            <h1>COMPETE</h1>
            <p>Try out for ICPC and compete internationally.</p>
            <button onClick={() => navigate("/compete")}>VIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
