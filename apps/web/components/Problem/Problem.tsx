import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./Problem.module.scss";

interface ProblemProps {
  name: string;
  url: string;
  difficulty: string;
  solutionURL: string;
}
export default function Problem({
  name,
  url,
  difficulty,
  solutionURL,
}: ProblemProps) {
  let backgroundColor, hoverColor;
  switch (difficulty) {
    case "easy":
      backgroundColor = "rgb(0, 150, 0)";
      hoverColor = "rgb(0, 100, 0)";
      break;
    case "medium":
      backgroundColor = "rgb(250, 100, 40)";
      hoverColor = "rgb(200, 100, 40)";
      break;
    case "hard":
      backgroundColor = "rgb(200, 0, 0)";
      hoverColor = "rgb(150, 0, 0)";
      break;
    case "contest":
      backgroundColor = "rgb(0, 100, 200)";
      hoverColor = "rgb(0, 100, 150)";
      break;
  }
  const [diffColor, setDiffColor] = useState(backgroundColor);
  return (
    <Card className={styles.problem + " mx-4 my-3"} style={{ backgroundColor: diffColor }} onMouseEnter={() => setDiffColor(hoverColor)} onMouseLeave={() => setDiffColor(backgroundColor)}>
      <a href={url}>
        <h4 className="text-center m-0">{name}</h4>
      </a>
    </Card >
  );
}
