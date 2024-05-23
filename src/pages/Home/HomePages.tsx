/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Row } from "react-bootstrap";
import "./HomePages.scss";
import Skill from "./Skill";
import ProjectPage from "../Project/ProjectPage";
import Experience from "./Experience";
import Footer from "../../components/Footer/Footer";
import { Variants, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePages() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // transition: { type: "spring", stiffness: 800, damping: 30, mass: 1 },
      display: "none",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference",
      transition: { type: "spring", stiffness: 800, damping: 30, mass: 1 },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <Container>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
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
                Passionate JUNIOR FRONT END DEVELOPER with a keen interest in
                creating engaging web experiences and continuous learning.
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
