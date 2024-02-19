import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {  
  AiOutlineTwitter,  
  AiFillMail,
} from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiRust,  
} from "react-icons/di";
import {
  SiCsharp,
  SiGo,
  SiElectron,
  SiPython,
  SiAndroid,
  SiDiscord
} from "react-icons/si";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I am fluent in many program languages like
              <i>
                <b className="purple"> C#, Golang, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Automation Tools and Desktop Application </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
            </p>
          </Col>
        </Row>
        <Row style={{marginTop:"40px"}}>
          <h1 className="project-heading">
            PROFESSIONAL <strong className="purple">SKILLS </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiGo />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiElectron />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiRust />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiAndroid />
            </Col>
          </Row>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/MagDev2022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:magdev2@proton.me"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/qYpgfwjnW2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
