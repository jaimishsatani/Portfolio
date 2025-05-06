import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaimish Satani </span>
            from <span className="purple"> Surendranagar, Gujarat, India .</span>
            <br />
            Currently pursuing a B.Tech in Computer Science and Engineering (CSE) at Charusat University
            <br />
            I have a strong passion for programming and enjoy exploring new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All power is within you , you can do anything and everything. !"{" "}
          </p>
          <footer className="blockquote-footer">Swami Vivekananda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
