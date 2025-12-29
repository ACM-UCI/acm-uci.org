import "../css/home3.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NAV_ITEMS = [
    { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn" },
    { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice" },
    { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete" },
    { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board" },
    { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];

const SPEECH_LOGOS = [
    "home2/cpp.png",
    "home2/python.svg",
    "home2/java.webp",
    "home2/kotlin.png"
];

export default function Home3() {
    const navigate = useNavigate();

    const [activeNav, setActiveNav] = useState(null);
    const [sideOpen, setSideOpen] = useState(false);

    const [activeMascot, setActiveMascot] = useState(null);
    const [bubbleX, setBubbleX] = useState(0);

    const [fade, setFade] = useState(false);


    function handleMascotEnter(e, id) {
        const rect = e.currentTarget.getBoundingClientRect();
        setBubbleX(rect.x + 30);
        setActiveMascot(id);
    }


    useEffect(() => {
        const interval = setInterval(() => setFade(f => !f), 5000);
        return () => clearInterval(interval);
    }, []);

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

            <div id="h3home-central-content">
                <img src="home2/acmbackground.png" />
                <div id="h3central-content-div">
                    <div id="h3hcc-header-div">
                        <h1>ACM @ UCI</h1>
                    </div>
                    <div id="h3hcc-paragraph-div">
                        <p>Meetings in DBH 4011</p>
                        <p>Wednesdays 6pm – 8pm</p>
                    </div>
                </div>
            </div>

            <div id="h3acm-preview">
                <div id="h3left-preview-images">
                    <div id="h3top-left-preview-images">
                        <div className="h3image-fader">
                            <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teama.jpg" />
                            <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/AIF.jpg" />
                        </div>
                        <div className="h3image-fader">
                            <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/effieteam.jpg" />
                            <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/randomday.jpg" />
                        </div>
                    </div>

                    <div id="h3bottom-left-preview-images">
                        <div className="h3image-fader">
                            <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teamjab.jpg" />
                            <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/elijahbijection.jpg" />
                        </div>
                        <div className="h3image-fader">
                            <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/Bteam.jpg" />
                            <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/fullicpc.jpg" />
                        </div>
                    </div>
                </div>

                <div id="h3right-acm-logo">
                    <img src="home2/acm-uci.svg" />
                </div>
            </div>


            <div id="h3-alternate-acm-preview">
                <div id="h3-alternate-acm-logo">
                    <img src="home2/acm-uci.svg" />
                </div>
                <div id="h3-alternate-preview-images">
                    <div className="h3image-fader">
                        <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teama.jpg" />
                        <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/AIF.jpg" />
                    </div>
                    <div className="h3image-fader">
                        <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/effieteam.jpg" />
                        <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/randomday.jpg" />
                    </div>

                    <div className="h3image-fader">
                        <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/teamjab.jpg" />
                        <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/elijahbijection.jpg" />
                    </div>
                    <div className="h3image-fader">
                        <img className="h3image-a" style={{ opacity: fade ? 0 : 1 }} src="home2/Bteam.jpg" />
                        <img className="h3image-b" style={{ opacity: fade ? 1 : 0 }} src="home2/fullicpc.jpg" />
                    </div>



                </div>


            </div>



            <div id="h3-favorite-programming-language">
                {activeMascot != null &&
                            <div id="h3-speech-bubble" style={{ left: bubbleX }}>
                <img id="h3-sb-bg" src="home2/chat-bubble.png" />
                <img id="h3-sb-pl" src={SPEECH_LOGOS[activeMascot]} />
            </div>}
                <div id="h3-favorite-programming-language-bottom">
                    <div id="h3-mascots">
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

                    <div id="h3-question-to-mascots">
                        <h1>
                            What's your Favorite Programming Language?{" "}
                            <span>(hover over a guy)</span>
                        </h1>
                    </div>
                </div>
            </div>


      <div id="h3-before-final-spacer" />

      <div id="h3-final-section">
        <div id="h3-learn-link">
          <img src="home2/learn.jpg" />
          <div id="h3-learn-text">
            <h1>LEARN</h1>
            <p>Start competitive programming with C++, Java, or Python.</p>
            <button onClick={() => navigate("/learn")}>VIEW</button>
          </div>
        </div>

        <div id="h3-practice-link">
          <img src="home2/twosum.png" />
          <div id="h3-practice-text">
            <h1>PRACTICE</h1>
            <p>Solve problems on Codeforces, LeetCode, and Kattis.</p>
            <button onClick={() => navigate("/practice")}>VIEW</button>
          </div>
        </div>

        <div id="h3-compete-link">
          <img src="home2/competition.jpg" />
          <div id="h3-competition-text">
            <h1>COMPETE</h1>
            <p>Try out for ICPC and compete internationally.</p>
            <button onClick={() => navigate("/compete")}>VIEW</button>
          </div>
        </div>
      </div>
    </div>


    )
}