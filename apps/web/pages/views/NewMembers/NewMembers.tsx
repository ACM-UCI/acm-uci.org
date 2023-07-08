import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { CodeBlock, dracula } from "react-code-blocks";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../../../components/Header/Header";
import styles from "./NewMembers.module.scss";

enum Language {
  Python = "python",
  Cpp = "cpp",
}

const stdinCode = {
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
}
    `,
};

export default function NewMembers() {
  const [language, setLanguage] = useState<string>(Language.Python);

  const el = useRef(null);

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
      <Header headerText="New Member Guide" subHeaderText="" />
      <Container className="p-5">
        <Row className="gx-5 mb-5">
          <h2 className="mb-4">What Is Competitive Programming?</h2>
          <Col>
            <div className={styles.window}>
              <div className={styles.top}>
                <span
                  className={styles.dot}
                  style={{ background: "#ED594A" }}
                />
                <span
                  className={styles.dot}
                  style={{ background: "#FDD800" }}
                />
                <span
                  className={styles.dot}
                  style={{ background: "#5AC05A" }}
                />
              </div>
              <code ref={el} />
            </div>
            <br />
            <p>
              Competitive programming is an activity where participants compete
              to solve problems using algorithmic techniques within a given time
              limit.
            </p>
          </Col>
        </Row>
        <Row className="gx-5 mb-5">
          <Col>
            <h2>Getting Started</h2>
            <p>
              Most, if not all problems, require reading in some form of input
              and outputting an answer based on that input. Thus, being able to
              quickly and efficiently read input is critical to succeeding in
              competitive programming.
            </p>
            <p>
              Most programming languages have functions that read in input,
              including Python and C++.
            </p>
            <div className={styles.chooseLanguage}>
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
            <div className={"p-0 " + styles.codeBlock}>
              <CodeBlock
                text={stdinCode[language]}
                language={language}
                showLineNumbers
                theme={dracula}
              />
            </div>
            <p className="mt-3">
              That&apos;s it! While this may seem easy, many more coding paradigms
              and methods are often tied together in order for a problem to be
              solved. With enough practice and time, one can intuitively
              determine which of these methods to use when solving a problem.
            </p>
          </Col>
        </Row>
        <Row>
          <h2>Resources</h2>
          <p>
            Some of the best ways to learn competitive programming include
            watching YouTube tutorials or reading an algorithms textbook!
          </p>
          <Col>
            <h4>YouTube Channels</h4>
            <ul>
              <li>
                <Link href="https://www.youtube.com/@NeetCode">Neetcode</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@abdul_bari">
                  Abdul Bari
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Books</h4>
            <ul>
              <li>
                <Link href="https://cses.fi/book/book.pdf">
                  Competitive Programmer&apos;s Handbook
                </Link>
              </li>
              <li>
                <Link href="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/">
                  Introduction to Algorithms
                </Link>
              </li>
            </ul>
          </Col>
          <p>
            Many other resources can be found online simply by searching. For example,
            universities have published useful free PDFs on data structures and algorithms.
          </p>
        </Row>
      </Container>
    </>
  );
}
