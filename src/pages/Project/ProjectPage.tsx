/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Container, Row } from "react-bootstrap";
import "./ProjectPage.scss";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export default function ProjectPage() {
  const datas = [
    {
      name: "Vinema",
      desc: "Global film rating search platform providing comprehensive information for swift and accurate movie selection.",
      img: "/img/vinema.png",
      tech: ["React.js", "Typescript", "Bootstrap"],
      link: "https://vinema.vercel.app",
    },
    {
      name: "Guess JKT48 Member",
      desc: "A fun and challenging JKT48 member guessing game, where players decipher clues to identify members.",
      img: "/img/guessjkt48member.png",
      tech: ["React.js", "Typescript", "Bootstrap"],
      link: "https://guessjkt48member.vercel.app",
    },
  ];

  const location = useLocation();

  console.log(location);

  const sliceData = location.pathname === "/" ? datas?.slice(0, 3) : datas;

  return (
    <div
      style={{
        background: `${location.pathname === "/" && "var(--secondary)"}`,
      }}
    >
      <Container>
        <div className="project">
          <h1 className="text-title">
            My <span className="text-primary">Projects</span>
          </h1>
          <Row className="justify-content-evenly gap-3">
            {sliceData?.map((data: any, i: number) => (
              <motion.a
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                href={data?.link}
                target="_blank"
                key={i}
                className="col-lg-3 box-project"
              >
                <img src={data?.img} alt="" className="img-fluid" />
                <h5>{data?.name}</h5>
                {/* <h6>{data?.tech?.join('/')}</h6> */}
                <p className="mb-2">{data?.desc}</p>
                <div className="d-flex gap-1">
                  {data?.tech.map((item: any, k: number) => (
                    <Button key={k} variant="outline-secondary">
                      <h6>{item}</h6>
                    </Button>
                  ))}
                </div>
              </motion.a>
            ))}
          </Row>
          {location.pathname === "/" && (
            <NavLink
              to="/project"
              className="d-flex justify-content-center mt-3"
            >
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="btn btn-outline-primary"
              >
                View More
              </motion.button>
            </NavLink>
          )}
        </div>
      </Container>
    </div>
  );
}
