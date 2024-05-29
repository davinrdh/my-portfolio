/* eslint-disable @typescript-eslint/no-explicit-any */
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./HomePages.scss";
import TypeWriter from "../../components/TypeWriter";

export default function Hero() {
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
      backgroundColor: "var(--background)",
      opacity: 0,
      zIndex: 0,
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
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <Row className="hero flex-md-row-reverse">
        <Col md={12} lg={4} sm={12} className="avatar offset-md-1">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once:true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            src="/img/avatar.png"
            width={250}
            height={250}
            alt=""
          />
        </Col>
        <Col md={12} lg={6} sm={12} className="text-hero offset-md-1">
          <div>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once:true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Hi!
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once:true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {/* I'm Davin Ridha, */}
              <TypeWriter text="I'm Davin Ridha" />
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.8, delay: 1.8 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <b>Front End Developer.</b>
              {/* <b><TypeWriter text="Front End Developer." speed={150} /></b> */}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 2.3, delay: 2.3 }}
            >
              Passionate JUNIOR FRONT END DEVELOPER with a keen interest in
              creating engaging web experiences and continuous learning.
            </motion.p>
          </div>
        </Col>
      </Row>
    </>
  );
}
