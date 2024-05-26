/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row } from "react-bootstrap";
import "./HomePages.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Skill() {
  const dataSkill = [
    {
      skill: "HTML",
      img: "/img/skill/html.svg",
    },
    {
      skill: "CSS",
      img: "/img/skill/css.svg",
    },
    {
      skill: "JS",
      img: "/img/skill/js.svg",
    },
    {
      skill: "TS",
      img: "/img/skill/typescript.svg",
    },
    {
      skill: "SCSS",
      img: "/img/skill/sass.svg",
    },
    {
      skill: "React",
      img: "/img/skill/react.svg",
    },
    {
      skill: "Angular",
      img: "/img/skill/angular.svg",
    },
    {
      skill: "Bootstrap",
      img: "/img/skill/bootstrap.svg",
    },
    {
      skill: "Git",
      img: "/img/skill/git.svg",
    },
    {
      skill: "Node JS",
      img: "/img/skill/node-js.svg",
    },
    {
      skill: "Figma",
      img: "/img/skill/figma.svg",
    },
    {
      skill: "Framer Motion",
      img: "/img/skill/framer-motion.svg",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center"],
  });

  const createTransforms = (index: number, totalLength: number) => {
    const start = (index / totalLength) * 0.8; // Adjust the factor to control the delay between elements
    const end = start + 0.2; // The duration over which the opacity will change

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const scale = useTransform(scrollYProgress, [start, end], ['scale(1.5)', 'scale(1)']);

    return { opacity, scale };
  };

  return (
    <div ref={ref} className="container">
      <h1 className="text-title">
        My <span className="text-primary">Skills</span>
      </h1>
      <Row className="skill">
        {dataSkill?.map((data: any, i: number) => {
            const {opacity} = createTransforms(i, dataSkill?.length)
          return (
            <motion.div
              style={{
                opacity: opacity,
                transition: "all .2s ease-in-out",
              }}
              transition={{ duration: 10 }}
              className="col-md-2 col-3 box-skill"
              key={i}
            >
              <img
                src={data?.img}
                alt=""
                width={60}
                height={60}
              />
              <p>{data?.skill}</p>
            </motion.div>
          );
        })}
      </Row>
    </div>
  );
}
