/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Container, Row } from "react-bootstrap";
import "./ProjectPage.scss";

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

  return (
    <div style={{ background: "var(--secondary)" }}>
      <Container>
        <div className="project">
          <h1 className="text-center">My <span className="text-primary">Projects</span></h1>
          <Row className="justify-content-evenly gap-3">
            {datas?.map((data: any, i: number) => (
              <a
                href={data?.link}
                target="_blank"
                key={i}
                className="col-md-3 box-project"
              >
                <img src={data?.img} alt="" className="img-fluid" />
                <h5>{data?.name}</h5>
                {/* <h6>{data?.tech?.join('/')}</h6> */}
                <p className="mb-2">{data?.desc}</p>
                <div className="d-flex gap-1">
                  {data?.tech.map((item: any, k:number) => (
                    <Button key={k} variant="outline-secondary">
                      <h6>{item}</h6>
                    </Button>
                  ))}
                </div>
              </a>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
