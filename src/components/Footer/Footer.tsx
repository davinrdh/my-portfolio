import { Button } from "react-bootstrap";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="d-flex align-items-center h-100">
          <div>
            <h1>Get <span className="text-primary">in</span> Touch</h1>
            <p>
              I'm eager to join a collaborative team where I can contribute my
              skills and learn from others. If you have an exciting project,
              let's discuss how I can be a valuable asset. I'm actively seeking
              a new opportunity to apply my skills and continue growing!
            </p>
            <Button variant="outline-primary">Contact Me</Button>
          </div>
        </div>
      </div>
    </>
  );
}
