/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "react-bootstrap";
import "./HomePages.scss";
import Skill from "./Skill";
import ProjectPage from "../Project/ProjectPage";
import Experience from "./Experience";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero";

export default function HomePages() {
 
  return (
    <>
      <Container>
        <Hero />
        <Skill />
      </Container>
      <ProjectPage />
      <Experience />
      <Footer />
    </>
  );
}
