/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "react-bootstrap";
import "./HomePages.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const datas = [
  {
    title: "Front End Developer - Internship",
    company: "Indonesia Indicator",
    img: '/img/indonesiaindicator.jpg',
    date: "April 2023 - December 2023",
    responsibility: [
      "Contributing to a project that utilizes the React TypeScript library with Bootstrap for styling, and proficient in integrating data through RESTful APIs.",
      "Creating customized styles using Styled Components with SASS.",
    ],
  },
  {
    title: "Sistem Informasi Jaringan dan Aplikasi",
    company: "SMK Negeri 2 Yogyakarta",
    img: '/img/smkn2yk.jpg',
    date: "July 2020 - Mei 2024",
    responsibility: [
      "Learn the basics of programming using PHP.",
      "Learn about the MySQL database and how to use it and commands.",
    ],
  },
];

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
      <h1 className="text-title">
        My <span className="text-primary">Experiences</span>
      </h1>
      <Row className="my-5">
        <Col xs={5}>
          {datas?.map((industries: any, i: number) => (
            <motion.div
              key={i}
              className="industries"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: .5, delay: i * .5 }}
            >
              <div className="logo-img">
                <img
                  src={industries?.img}
                  alt=""
                  className="rounded-circle"
                />
              </div>
              <div>
                <h4>{industries?.company}</h4>
                <h6>{industries?.title}</h6>
                <p>{industries?.date}</p>
              </div>
            </motion.div>
          ))}
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={3} className="position-relative" style={{zIndex: '-1'}}>
              <div className="line"></div>
              <motion.div
                ref={ref}
                className="line-experience"
                style={{
                  height: lineHeight,
                  backgroundColor: lineColor,
                }}
              >
                <div className="circle" />
              </motion.div>
            </Col>
            <Col xs={9}>
              {datas?.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  className="responsibility"
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, delay: i * .7 }}
                >
                  {item?.responsibility?.map((data: any, index: number) => (
                    <p key={index}>- {data}</p>
                  ))}
                </motion.div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
