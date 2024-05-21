/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from 'react-bootstrap';
import './HomePages.scss'

export default function Skill() {

    const dataSkill = [
        {
            skill: 'HTML',
            img: '/img/skill/html.svg'
        },
        {
            skill: 'CSS',
            img: '/img/skill/css.svg'
        },
        {
            skill: 'JS',
            img: '/img/skill/js.svg'
        },
        {
            skill: 'TS',
            img: '/img/skill/typescript.svg'
        },
        {
            skill: 'SCSS',
            img: '/img/skill/sass.svg'
        },
        {
            skill: 'React',
            img: '/img/skill/react.svg'
        },
        {
            skill: 'Angular',
            img: '/img/skill/angular.svg'
        },
        {
            skill: 'Bootstrap',
            img: '/img/skill/bootstrap.svg'
        },
        {
            skill: 'Git',
            img: '/img/skill/git.svg'
        },
        {
            skill: 'Node JS',
            img: '/img/skill/node-js.svg'
        },
        {
            skill: 'Figma',
            img: '/img/skill/figma.svg'
        },
    ]

    
  return (
    <div className="container">
      <h1 className="text-center">My <span className="text-primary">Skills</span></h1>
      <Row className="skill mt-5">
        {dataSkill?.map((data: any, i: number) => (
        <Col md={2} xs={3} className="box-skill" key={i}>
          <img src={data?.img} alt="" width={60} height={60} />
          <p>{data?.skill}</p>
        </Col>
        ))}
      </Row>
    </div>
  );
}
