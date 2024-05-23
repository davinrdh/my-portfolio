import "./Footer.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="d-flex align-items-center h-100">
          <div>
            <motion.h1
              className="overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Get <span className="text-primary">In</span> Touch
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I'm eager to join a collaborative team where I can contribute my
              skills and learn from others. If you have an exciting project,
              let's discuss how I can be a valuable asset. I'm actively seeking
              a new opportunity to apply my skills and continue growing!
            </motion.p>
            <NavLink to={"/contact"}>
              <motion.button
                className="btn btn-outline-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Contact Me
              </motion.button>
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
