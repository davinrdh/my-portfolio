/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Row } from "react-bootstrap";
import "./HomePages.scss";
import Skill from "./Skill";
import ProjectPage from "../Project/ProjectPage";
import Experience from "./Experience";
import Footer from "../../components/Footer/Footer";

interface IHomePages {
  textEnter?: any;
  textLeave?: any;
}

export default function HomePages({ textEnter, textLeave }: IHomePages) {
  return (
    <>
      <Container>
        <Row className="hero flex-md-row-reverse">
          <Col md={12} lg={4} sm={12} className="avatar offset-md-1">
            <img src="/img/avatar.png" width={250} height={250} alt="" />
          </Col>
          <Col md={12} lg={6} sm={12} className="text-hero offset-md-1">
            <div>
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Hi,
              </h1>
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                I'm Davin Ridha,
              </h1>
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <b>Front End Developer.</b>
              </h1>
              <p>
                Passionate JUNIOR FRONT END DEVELOPER with a keen interest in creating engaging web experiences and continuous learning.
              </p>
            </div>
          </Col>
        </Row>
        <Skill />
      </Container>
      <ProjectPage />
      <Experience />
      <Footer />
    </>
  );
}
