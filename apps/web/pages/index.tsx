import Container from "react-bootstrap/Container";
import About from "../components/About/About";
import Header from "../components/Header/Header";

export default function Landing() {
  return (
    <>
      <Header
        headerText="ACM @ UCI"
        subHeaderText="Learn about algorithms and improve your interview skills"
      />
      <About />
    </>
  );
}
