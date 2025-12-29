import "../css/learn3.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import 'highlight.js/styles/night-owl.css';

import hljs from "highlight.js";


const NAV_ITEMS = [
    { id: "h3learn-nav", label: "LEARN", text: "Learn more about ACM!", href: "/#learn" },
    { id: "h3practice-nav", label: "PRACTICE", text: "Practice fun problems!", href: "/#practice" },
    { id: "h3compete-nav", label: "COMPETE", text: "Compete at ICPC!", href: "/#compete" },
    { id: "h3board-nav", label: "BOARD", text: "Meet the Board!", href: "/#board" },
    { id: "h3contact-nav", label: "CONTACT", text: "Find us on Discord and Instagram!", href: "/#contact" }
];

const IDE_TEXT = [
    `import sys

input = sys.stdin.readline

array = list(map(int, input().split()))
string = input().strip()
`,
    `#include <bits/stdc++.h>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  string s;
  cin >> n >> s;
}`
];

export default function Learn3() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState(0);

    const [activeNav, setActiveNav] = useState(null);
    const [sideOpen, setSideOpen] = useState(false);
    const ideCodeRef = useRef(null);

    function switchLanguage(i) {
        setLanguage(i);
        if (ideCodeRef.current) {
            ideCodeRef.current.textContent = IDE_TEXT[i];
            ideCodeRef.current.className = i === 0 ? "l3-language-python" : "l3-language-cpp";
            window.hljs.highlightElement(ideCodeRef.current);
        }
    }

    const terminalRef = useRef(null);

    useEffect(() => {
        hljs.highlightAll();
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js";
        script.onload = () => window.hljs.highlightAll();
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
        script.onload = () => {
            new window.Typed(terminalRef.current, {
                strings: [
                    "from acm_uci import binary_search, segtree, dijkstra<br><br>array = map(int, input().split())<br>binary_search(array, 3)"
                ],
                typeSpeed: 50,
                showCursor: false
            });
        };
        document.body.appendChild(script);
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

            <div id="l3-central-content">
                <img src="learn2/books.png" />
                <div id="l3-cc-text-wrapper">
                    <div id="l3-cc-h1">
                        <h1>LEARN</h1>
                    </div>
                    <div id="l3-cc-other">
                        <h2>
                            Competitive programming is a sport <em>anyone</em> can do
                        </h2>
                        <p>
                            You don’t need <em>fancy software</em> or <em>crazy math skills</em> —
                            just personal drive and a bit of guidance!
                        </p>
                    </div>
                </div>
            </div>

            <div id="l3-main-content">

                <div id="l3-mc-part1">
                    <div className="l3-left-text">
                        <h1>What is Competitive Programming?</h1>
                    </div>

                    <div id="l3-fake-terminal">
                        <div id="l3-terminal-top">
                            <div className="tdot" style={{ backgroundColor: "#ED594A" }} />
                            <div className="tdot" style={{ backgroundColor: "#FDD800" }} />
                            <div className="tdot" style={{ backgroundColor: "#5AC05A" }} />
                        </div>
                        <div id="l3-terminal-center">
                            <code ref={terminalRef} />

                        </div>
                    </div>

                    <div className="l3-left-text">
                        <p>
                            Competitive programming is an activity where participants solve
                            algorithmic problems under time pressure.
                        </p>
                    </div>
                </div>

                <div id="l3-mc-part2">
                    <div id="l3-getting-started">
                        <h1>Getting Started</h1>
                        <h3>Choosing the Right Editor</h3>
                        <p>
                            Competitive programming is about quickly programming an efficient, correct solution to a problem. Naturally, in your computer science career, you'll need to choose a text editor or integrated development enviroment to work on.

                            While there are a lot of text editors available for use, there are some that are highly recommended by ACM @ UCI users:
                        </p>
                    </div>

                    <div id="l3-ide-layout">
                        <img src="learn2/vscode.svg" />
                        <img src="learn2/Vim.png" />
                        <img src="learn2/neovim-logo.svg" />
                        <img src="learn2/Emacs.png" />
                    </div>
                </div>

                <div id="l3-mc-part3">
                    <div id="l3-reading-input">
                        <h3>Reading Input</h3>
                        <p>
                            Most, if not all problems, require reading in some form of input and outputting an answer based on that input. Thus, being able to quickly and efficiently read input is critical to succeeding in competitive programming.

                            Most programming languages have functions that read in input, including Python and C++.</p>
                    </div>

                    <div id="l3-fake-ide">
                        <div id="l3-switch-languages">
                            <button onClick={() => switchLanguage(0)}>Python</button>
                            <button onClick={() => switchLanguage(1)}>C++</button>
                        </div>
                        <pre>
                            <code ref={ideCodeRef} className="l3-language-python">
                                {IDE_TEXT[language]}
                            </code>
                        </pre>
                    </div>
                    <p>
                        That's it! While this may seem easy, many more coding paradigms and methods are often tied together in order for a problem to be solved. With enough practice and time, you can intuitively determine which of these methods to use when solving a problem.
                    </p>
                </div>

                <div id="l3-mc-part4">
                    <div id="resources-header">
                        <h1 >Resources</h1>
                    </div>


                    <div id="l3-resources">
                        <div id="l3-book-resource">
                            <div className="l3-resource-top"><p>Books</p></div>
                            <div className="l3-resource-content">
                                <p>If you're looking for a place to start or are looking to enhance your knowledge of data structures and algorithms, there's nothing better than reading through a guide that contains all the information you need!</p>
                                <ul>
                                    <li><a target="_blank" href="https://cses.fi/book/book.pdf">Competitive Programmer's Handbook
                                    </a></li>
                                    <li><a target="_blank" href="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/">Introduction to Algorithms (CLRS)
                                    </a></li>
                                    <li><a target="_blank" href="https://cpbook.net/#CP3details">Competitive Programming, 3rd Edition
                                    </a></li>
                                </ul>
                                <p>Some universities also publish free PDFs containing very useful information on data structures and algorithms.</p>
                            </div>
                        </div>

                        <div id="l3-youtube-resource">
                            <div className="l3-resource-top"><p>YouTube</p></div>
                            <div className="l3-resource-content">
                                <p>If watching videos helps you learn better, there are a lot of competitive programming resources available on YouTube as well!</p>
                                <ul>
                                    <li><a target="_blank" href="https://www.youtube.com/@NeetCode">
                                        Neetcode</a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/@abdul_bari">
                                        Abdul Bari</a></li>
                                </ul>
                                <p>If you prefer a more academic path, many universities post recordings of past lectures on data structures and algorithms.</p>
                                <ul>
                                    <li><a target="_blank" href="https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY">
                                        MIT 6.006:</a>&nbsp;Introduction to Algorithms</li>
                                    <li><a target="_blank" href="https://www.youtube.com/watch?v=wIq4CssPoO0&list=PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ">
                                        MIT 6.042J:</a>&nbsp;Mathematics for Computer Science</li>
                                    <li><a target="_blank" href="https://www.youtube.com/watch?v=0JUN9aDxVmI&list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf">
                                        Harvard CS 224:</a>&nbsp;Advanced Algorithms</li>
                                </ul>
                            </div>
                        </div>

                        <div id="l3-websites-resource">
                            <div className="l3-resource-top"><p>Websites</p></div>
                            <div className="l3-resource-content">
                                <p>
                                    The best way to get better at competitive programming is to practice! ACM @ UCI often uses these websites for meetings, presentations, and contests.
                                </p>
                                <ul>
                                    <li><a target="_blank" href="https://leetcode.com">
                                        LeetCode</a></li>
                                    <li><a target="_blank" href="https://codeforces.com">
                                        Codeforces</a></li>
                                    <li><a target="_blank" href="https://open.kattis.com">
                                        Kattis</a></li>
                                    <li><a target="_blank" href="https://www.hackerrank.com">
                                        HackerRank</a></li>
                                </ul>
                                <p>
                                    There are also other websites where you can focus solely on improving your knowledge of competitive programming.
                                </p>
                                <ul>
                                    <li><a target="_blank" href="https://cp-algorithms.com">
                                        Algorithms for Competitive Programming</a></li>
                                    <li><a target="_blank" href="https://www.google.com/about/careers/applications/buildyourfuture/resources/">
                                        Data Structures & Algorithms with Google</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}