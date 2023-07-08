import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/Header/Header";
import client from "../utils/sanity";
import { Member } from "../types";

export default function Board({ board }) {
  return (
    <>
      <Header headerText="The Board" subHeaderText="Agents of ACM" />
      <Container fluid className="p-5">
        <Row className="justify-content-center">
          {board.map(({ imageUrl, name, position }) => (
            <Card className="mx-5 mb-5 p-0" style={{ width: "15rem" }}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{position.positionName}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const board = await client.fetch(
    `*[_type == "boardMember" && isActive == true]{ ..., position->, name, "imageUrl": image.asset->url }`
  );

  let president: Array<Member> = [];
  let vps: Array<Member> = [];
  let directors: Array<Member> = [];
  let interns: Array<Member> = [];
  board.forEach((member: Member) => {
    switch (member.position.positionCategory) {
      case "president":
        president.push(member);
        break;
      case "vice-president":
        vps.push(member);
        break;
      case "director":
        directors.push(member);
        break;
      case "intern":
        interns.push(member);
        break;
      default:
        break;
    }
  });

  const compareFunction = (a: Member, b: Member) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  president.sort(compareFunction);
  vps.sort(compareFunction);
  directors.sort(compareFunction);
  interns.sort(compareFunction);

  let boardOrder = president.concat(vps);
  boardOrder = boardOrder.concat(directors);
  boardOrder = boardOrder.concat(interns);

  return {
    props: {
      board: boardOrder,
    },
  };
}
