import Image from "next/image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import icpcLogo from "../../assets/icpc-logo.png";
import socalRegional from "../../assets/socal_regional_2022.jpg";
import ieeextremeLogo from "../../assets/ieeextreme-logo.png";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <section className={styles.description}>
        <Container>
          <Row>
            <Col lg={6}>
              <h2>What is ACM@UCI?</h2>
              <p>
                ACM@UCI is UCI's official competitive programming club, where
                coders of all kinds &mdash; those passionate about competitive
                programming, trying to get through technical interviews, or
                hoping to apply what they learn in their algorithms class
                &mdash; come together and solve problems! Each week, we host
                informative presentations on various topics in data structures
                and algorithms, including the divide and conquer paradigm,
                dynamic programming, and greedy algorithms. We also hold
                practice sessions on another day of the week after the session
                so members can internalize the concepts we cover. Sometimes, we
                host friendly programming contests for our members as well!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="gx-5 my-5 text-center">
          <h2>Competitions</h2>
          <p>
            Each year, ACM@UCI competes in several competitve programming
            contests. Keep an eye out for announcements on how to participate!
          </p>
          <Col>
            <Image
              src={icpcLogo}
              alt="International Competitive Programming Contest logo"
              width="400"
            />
            <h5 className="my-3">
              International Competitive Programming Contest (ICPC)
            </h5>
            <p>
              ICPC is an algorithmic programming contest for college students
              all around the world. With access to only one computer, teams of
              three race against each other to solve these problems as fast as
              possible in order to advance to the next rounds.
            </p>
          </Col>
          <Col>
            <Image src={ieeextremeLogo} alt="IEEExtreme logo" width="200" />
            <h5 className="my-3">IEEExtreme</h5>
            <p>
              IEEExtreme is another international competition in which teams
              compete against each other to solve algorithmic problems within a
              24 hour time span.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
