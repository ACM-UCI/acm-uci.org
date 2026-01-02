import "../css/contact.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NAV_ITEMS = [
    { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn" },
    { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice" },
    { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete" },
    { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board" },
    { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];

export default function Home3() {
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

            <div id="contact-button-container">

                <div
                    className="contact-individual-container"
                >
                    <a target="_blank" href="https://discord.gg/MCtKPxC">
                    <img src="logos/discord.svg" /></a>
                </div>
                                <div
                    className="contact-individual-container"
                >
                     <a target="_blank" href="https://www.instagram.com/acm.uci/">
                    <img src="logos/instagram.png" /></a>
                </div>
                                                <div
                    className="contact-individual-container"
                >
                    <a target="_blank" href="https://github.com/ACM-UCI/acm-uci.org"> <img src="logos/github.svg" /></a>
                   
                </div>
                                                <div
                    className="contact-individual-container"
                >
                    <a href="mailto:acm@uci.edu"><img src="logos/email.svg" /></a>
                    
                </div>
            </div>

        </div>


    )
}