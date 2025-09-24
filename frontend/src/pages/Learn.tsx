import { useState, useEffect, useRef } from "react";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import Typed from "typed.js";
import { CodeBlock, a11yDark } from "react-code-blocks";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useLocation } from 'react-router-dom';

import "../scss/global.scss";

const Language = {
    Python: "python",
    Cpp: "cpp",
} as const;

type Language = (typeof Language)[keyof typeof Language];

const stdinCode: Record<Language, string> = {
    [Language.Python]: `import sys

input = sys.stdin.readline

# Read a space-separated sequence of integers into input
array = list(map(int, input().split()))

# Read in a string as input, making sure to clear any surrounding whitespace
string = input().strip()

`,
    [Language.Cpp]: `#include <bits/stdc++.h>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  string s;
  cin >> n >> s;
}
    `,
};



function LearnBanner() {

    let learn_doodle = import.meta.env.BASE_URL + "/learn/learn_doodle.jpg";
    let learn_banner_main_header = "Competitive programming is a sport anyone can do";
    let learn_banner_sub_header = "You don’t need fancy software or crazy math skills to succeed - just personal drive and a bit of guidance!";

    return (
        <div id="top" className="learn_banner_wrapper d-flex justify-content-center align-items-center">
            <Row className="align-items-center">
                <Col xs={12} md={8} className="text-left">
                    <h1 className="static-font-size-10">{learn_banner_main_header}</h1>
                    <h1 className="static-font-size-6">{learn_banner_sub_header}</h1>
                </Col>
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <img src={learn_doodle} className="subpage_banner_image"></img>
                </Col>

            </Row>
        </div>
    );
}

export default function Learn() {
    const [language, setLanguage] = useState<Language>(Language.Python);

    const el = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "from acm_uci import binary_search, segtree, dijkstra<br><br>array = map(int, input().split())<br>binary_search(array, 3)",
            ],
            typeSpeed: 50,
        });
        return () => {
            typed.destroy();
        };
    });

    return (
        <>
            <title>New Members | ACM @ UCI</title>
            <LearnBanner></LearnBanner>
            <Container className="p-5">
                <Row className="gx-5">
                    <h1 className="mb-4">What Is Competitive Programming?</h1>
                    <Col>
                        <div className="window">
                            <div className="top">
                                <span
                                    className="dot"
                                    style={{ background: "#ED594A" }}
                                />
                                <span
                                    className="dot"
                                    style={{ background: "#FDD800" }}
                                />
                                <span
                                    className="dot"
                                    style={{ background: "#5AC05A" }}
                                />
                            </div>
                            <code ref={el} />
                        </div>
                        <br />
                        <p>
                            Competitive programming is an activity where
                            participants compete to solve problems using
                            algorithmic techniques within a given time limit.
                        </p>
                    </Col>
                </Row>
                <h1 className="my-4">Getting Started</h1>
                <h5>
                    <strong>Choosing the Right Editor</strong>
                </h5>
                <p>
                    Competitive programming is about quickly programming an
                    efficient, correct solution to a problem. Naturally, in your
                    computer science career, you&apos;ll need to choose a text
                    editor or integrated development enviroment to work on.
                </p>
                <p>
                    While there are a lot of text editors available for use,
                    there are some that are highly recommended by ACM @ UCI
                    users:
                </p>
                <Row className="text-center my-5">
                    <Col>
                        <Link to="https://code.visualstudio.com">
                            <Image
                                src={import.meta.env.BASE_URL + "/learn/VSCode.png"}
                                alt="Visual Studio Code logo"
                                className="IDE_image"
                            />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="https://www.vim.org/">
                            <Image
                                src={import.meta.env.BASE_URL + "/learn/Vim.png"}
                                alt="Vim logo"
                                className="IDE_image"
                            />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="https://neovim.io/">
                            <Image
                                src={import.meta.env.BASE_URL + "/learn/Neovim.svg"}
                                alt="Neovim logo"
                                className="IDE_image"
                            />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="https://www.gnu.org/software/emacs/">
                            <Image
                                src={import.meta.env.BASE_URL + "/learn/Emacs.png"}
                                alt="Emacs logo"
                                className="IDE_image"
                            />
                        </Link>
                    </Col>
                </Row>
                <h5>
                    <strong>Reading Input</strong>
                </h5>
                <p>
                    Most, if not all problems, require reading in some form of
                    input and outputting an answer based on that input. Thus,
                    being able to quickly and efficiently read input is critical
                    to succeeding in competitive programming.
                </p>
                <p>
                    Most programming languages have functions that read in
                    input, including Python and C++.
                </p>
                <div className="chooseLanguage">
                    <Button
                        type="button"
                        variant="dark"
                        onClick={(_) => setLanguage(Language.Python)}
                    >
                        Python
                    </Button>
                    <Button
                        type="button"
                        variant="dark"
                        onClick={(_) => setLanguage(Language.Cpp)}
                    >
                        C++
                    </Button>
                </div>
                <div className="codeBlock">
                    <CodeBlock
                        text={stdinCode[language]}
                        language={language}
                        showLineNumbers
                        theme={a11yDark}
                    />
                </div>
                <p className="mt-3">
                    That&apos;s it! While this may seem easy, many more coding
                    paradigms and methods are often tied together in order for a
                    problem to be solved. With enough practice and time, you can
                    intuitively determine which of these methods to use when
                    solving a problem.
                </p>
                <Row>
                    <h1 className="mt-4">Resources</h1>
                    <Col>
                        <Card >
                            <Card.Header>Books</Card.Header>
                            <Card.Body>
                                <p>
                                    If you&apos;re looking for a place to start
                                    or are looking to enhance your knowledge of
                                    data structures and algorithms, there&apos;s
                                    nothing better than reading through a guide
                                    that contains all the information you need!
                                </p>
                                <ul>
                                    <li>
                                        <Link to="https://cses.fi/book/book.pdf">
                                            Competitive Programmer&apos;s
                                            Handbook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/">
                                            Introduction to Algorithms (CLRS)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://cpbook.net/#CP3details">
                                            Competitive Programming, 3rd Edition
                                        </Link>
                                    </li>
                                </ul>
                                Some universities also publish free PDFs
                                containing very useful information on data
                                structures and algorithms.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header>YouTube</Card.Header>
                            <Card.Body>
                                <p>
                                    If watching videos helps you learn better,
                                    there are a lot of competitive programming
                                    resources available on YouTube as well!
                                </p>
                                <ul>
                                    <li>
                                        <Link to="https://www.youtube.com/@NeetCode">
                                            Neetcode
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/@abdul_bari">
                                            Abdul Bari
                                        </Link>
                                    </li>
                                </ul>
                                <p>
                                    If you prefer a more academic path, many
                                    universities post recordings of past
                                    lectures on data structures and algorithms.
                                </p>
                                <ul>
                                    <li>
                                        <Link to="https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY">
                                            MIT 6.006:
                                        </Link>{" "}
                                        Introduction to Algorithms
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/watch?v=wIq4CssPoO0&list=PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ">
                                            MIT 6.042J:
                                        </Link>{" "}
                                        Mathematics for Computer Science
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/watch?v=0JUN9aDxVmI&list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf">
                                            Harvard CS 224:
                                        </Link>{" "}
                                        Advanced Algorithms
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header>Websites</Card.Header>
                            <Card.Body>
                                <p>
                                    The best way to get better at competitive
                                    programming is to practice! ACM @ UCI often
                                    uses these websites for meetings,
                                    presentations, and contests.
                                </p>
                                <ul>
                                    <li>
                                        <Link to="https://leetcode.com">
                                            Leetcode
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://codeforces.com">
                                            Codeforces
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://open.kattis.com">
                                            Kattis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://hackerrank.com">
                                            Hackerrank
                                        </Link>
                                    </li>
                                </ul>
                                <p>
                                    There are also other websites where you can
                                    focus solely on improving your knowledge of
                                    competitive programming.
                                </p>
                                <ul>
                                    <li>
                                        <Link to="https://cp-algorithms.com">
                                            Algorithms for Competitive
                                            Programming
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/">
                                            Data Structures & Algorithms with
                                            Google
                                        </Link>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <p>
                        Lastly, and perhaps most importantly, is to have a good
                        understanding of the language you are programming in.{" "}
                        <Link to="https://docs.python.org/3/index.html">
                            Python
                        </Link>{" "}
                        and{" "}
                        <Link to="https://cplusplus.com/reference/">C++</Link>{" "}
                        have extensive documentation that you should definitely
                        look through!
                    </p>
                </Row>
            </Container>
        </>
    );
}