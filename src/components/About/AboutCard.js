import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anjan Padmanabhaiah </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently volunteering as a Cloud Engineer at Interact Health.
            <br />
            I have completed Post-Graduate Certificate in Information Technology and Project Management at Algonquin college
            Mississauga,Ontario.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anjan Padmanabhaiah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
