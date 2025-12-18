import "../css/learn2.css";
import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const NAV_ITEMS = [
  { id: "learn-nav", label: "LEARN", href: "/learn", text: "Learn more about ACM!" },
  { id: "practice-nav", label: "PRACTICE", href: "/practice", text: "Practice fun problems!" },
  { id: "compete-nav", label: "COMPETE", href: "/compete", text: "Compete at ICPC!" },
  { id: "board-nav", label: "BOARD", href: "/board", text: "Meet the Board!" },
  { id: "contact-nav", label: "CONTACT", href: "/contact", text: "Find us on Discord and Instagram!" }
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

/* ---------------- COMPONENT ---------------- */

export default function Learn2() {
  const [activeNav, setActiveNav] = useState(null);
  const [language, setLanguage] = useState(0);

  const terminalRef = useRef(null);
  const ideCodeRef = useRef(null);

  /* Typed.js */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.onload = () => {
      new window.Typed(terminalRef.current, {
        strings: [
          "from acm_uci import binary_search, segtree, dijkstra<br><br>array = map(int, input().split())<br>binary_search(array, 3)"
        ],
        typeSpeed: 50
      });
    };
    document.body.appendChild(script);
  }, []);

  /* Highlight.js */
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js";
    script.onload = () => window.hljs.highlightAll();
    document.body.appendChild(script);
  }, []);

  /* Switch IDE language */
  function switchLanguage(i) {
    setLanguage(i);
    if (ideCodeRef.current) {
      ideCodeRef.current.textContent = IDE_TEXT[i];
      ideCodeRef.current.className = i === 0 ? "language-python" : "language-cpp";
      window.hljs.highlightElement(ideCodeRef.current);
    }
  }

  return (
    <div id="learn2">

      {/* ---------------- NAVBAR ---------------- */}

      <nav id="navbar">
        <div id="navbar-logo" onMouseEnter={() => setActiveNav(null)}>
          <h1>ACM</h1>
          <img id="acmcenterlogo" src="learn2/acm-uci.svg" />
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
            style={{ left: `${activeNav * (window.innerWidth / 5)}px`, display: "flex" }}
            onMouseLeave={() => setActiveNav(null)}
          >
            <a href={NAV_ITEMS[activeNav].href}>
              {NAV_ITEMS[activeNav].text}
            </a>
          </div>
        )}
      </nav>

      {/* ---------------- HERO ---------------- */}

      <div id="central-content">
        <img src="learn2/books.png" />
        <div id="cc-text-wrapper">
          <div id="cc-h1">
            <h1>LEARN</h1>
          </div>
          <div id="cc-other">
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

      {/* ---------------- MAIN CONTENT ---------------- */}

      <div id="main-content">

        {/* Part 1 */}
        <div id="mc-part1">
          <div className="left-text">
            <h1>What is Competitive Programming?</h1>
          </div>

          <div id="fake-terminal">
            <div id="terminal-top">
              <div className="tdot" style={{ backgroundColor: "#ED594A" }} />
              <div className="tdot" style={{ backgroundColor: "#FDD800" }} />
              <div className="tdot" style={{ backgroundColor: "#5AC05A" }} />
            </div>
            <div id="terminal-center">
              <code ref={terminalRef} />
            </div>
          </div>

          <div className="left-text">
            <p>
              Competitive programming is an activity where participants solve
              algorithmic problems under time pressure.
            </p>
          </div>
        </div>

        {/* Part 2 */}
        <div id="mc-part2">
          <div className="left-text">
            <h1>Getting Started</h1>
          </div>
          <div className="left-text">
            <h3>Choosing the Right Editor</h3>
          </div>
          <div className="left-text">
            <p>
              Choosing a good editor helps you code quickly and efficiently.
            </p>
          </div>

          <div id="ide-layout">
            <img src="learn2/vscode.svg" />
            <img src="learn2/Vim.png" />
            <img src="learn2/neovim-logo.svg" />
            <img src="learn2/Emacs.png" />
          </div>
        </div>

        {/* Part 3 */}
        <div id="mc-part3">
          <div className="left-text">
            <h3>Reading Input</h3>
          </div>

          <div id="fake-ide">
            <div id="switch-languages">
              <button onClick={() => switchLanguage(0)}>Python</button>
              <button onClick={() => switchLanguage(1)}>C++</button>
            </div>
            <pre>
              <code ref={ideCodeRef} className="language-python">
                {IDE_TEXT[language]}
              </code>
            </pre>
          </div>
        </div>

        {/* Part 4 */}
        <div id="mc-part4">
          <div className="left-text">
            <h1>Resources</h1>
          </div>

          <div id="resources">
            <div id="book-resource">
              <div className="resource-top"><p>Books</p></div>
              <p className="resource-content">
                Competitive Programmer's Handbook<br />
                CLRS<br />
                Competitive Programming 3
              </p>
            </div>

            <div id="youtube-resource">
              <div className="resource-top"><p>YouTube</p></div>
              <p className="resource-content">
                Neetcode<br />
                Abdul Bari<br />
                MIT Algorithms
              </p>
            </div>

            <div id="websites-resource">
              <div className="resource-top"><p>Websites</p></div>
              <p className="resource-content">
                LeetCode<br />
                Codeforces<br />
                Kattis
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
