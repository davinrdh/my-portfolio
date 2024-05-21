import { Col, Row } from "react-bootstrap";
import "./HomePages.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Experience() {
  const ref = useRef(null);
  const primary = "#c5fb45";
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineColor = useTransform(scrollYProgress, [0, 1], [primary, primary]);

  return (
    <div className="experience">
      <h1 className="text-center">
        My <span className="text-primary">Experiences</span>
      </h1>
      <Row className="my-5">
        <Col xs={5}>
          <div className="industries">
            <div className="logo-img">
              <img
                src="/img/indonesiaindicator.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
            </div>
            <div>
              <h4>Indonesia Indicator</h4>
              <h6>Front End Developer - Internship</h6>
              <p>April 2023 - December 2023</p>
            </div>
          </div>
          <div className="industries">
            <div className="logo-img">
              <img
                src="/img/indonesiaindicator.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
            </div>
            <div>
              <h4>Indonesia Indicator</h4>
              <h6>Front End Developer - Internship</h6>
              <p>April 2023 - December 2023</p>
            </div>
          </div>
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={3} className="position-relative">
              <div className="line"></div>
              <motion.div
                ref={ref}
                className="line-experience"
                style={{
                  height: lineHeight,
                  backgroundColor: lineColor,
                }}
              >
              <div
                className="circle"
              />
              </motion.div>
            </Col>
            <Col xs={9}>
              <div className="responsibility">
                <p>
                  - Contributing to a project that utilizes the React TypeScript
                  library with Bootstrap for styling, and proficient in
                  integrating data through RESTful APIs.
                </p>
                <p>
                  - Creating customized styles using Styled Components with
                  SASS.
                </p>
              </div>
              <div className="responsibility">
                <p>
                  - Contributing to a project that utilizes the React TypeScript
                  library with Bootstrap for styling, and proficient in
                  integrating data through RESTful APIs.
                </p>
                <p>
                  - Creating customized styles using Styled Components with
                  SASS.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="box-experience"></div>
    </div>
  );
}
