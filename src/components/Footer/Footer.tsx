import { Button } from "react-bootstrap";
import "./Footer.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="git d-flex align-items-center h-100">
          <div>
            <h1>
              Get <span className="text-primary">in</span> Touch
            </h1>
            <p>
              I'm eager to join a collaborative team where I can contribute my
              skills and learn from others. If you have an exciting project,
              let's discuss how I can be a valuable asset. I'm actively seeking
              a new opportunity to apply my skills and continue growing!
            </p>
            <NavLink to={'/contact'}>
              <Button variant="outline-primary">Contact Me</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="snail">
        <motion.img
          src="/img/snail-icon.svg"
          width={30}
          animate={{
            x: ["-10vw", "100vw"],
          }}
          transition={{
            repeat: Infinity, // Loop the animation infinitely
            repeatType: "loop",
            duration: 15, // Adjust the duration for speed
            ease: "linear", // Ensure smooth linear motion
          }}
        />
      </div>
    </>
  );
}
