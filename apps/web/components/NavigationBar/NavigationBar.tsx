import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import acmLogo from "../../assets/acm-uci.svg";
import discordLogo from "../../assets/discord.svg";
import githubLogo from "../../assets/github.svg";

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src={acmLogo} width="75" alt="ACM@UCI logo" /> ACM @
                    UCI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/board">Board</Nav.Link>
                        <Nav.Link href="/problems">Problems</Nav.Link>
                        <Nav.Link href="/new-members">New Members</Nav.Link>
                        <Nav.Link href="https://discord.gg/MCtKPxC">
                            <Image
                                src={discordLogo}
                                alt="ACM@UCI Discord server invite"
                                width="20"
                            />
                        </Nav.Link>
                        <Nav.Link href="https://github.com/ACM-UCI/">
                            <Image
                                src={githubLogo}
                                alt="ACM@UCI GitHub"
                                width="20"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
