/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Menu({ setIsActive }: any) {
  const dataLink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const dataSosmed = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/davinrdh/",
    },
    {
      name: "Github",
      href: "https://github.com/davinrdh",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/davin-ridha",
    },
  ];

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      delay: 0.5,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const logoVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: { staggerChildren: 0.1 },
    },
    open: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <>
      <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="menu"
      >
        <Container>
          <div className="d-flex justify-content-between py-3">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="logo overflow-hidden"
            >
              {/* <img src="/logo.png" alt="" width={100}/> */}
              <motion.h1 variants={logoVars}>davinridha</motion.h1>
            </motion.div>
            <div className="close" onClick={() => setIsActive(false)}>
              <img src="/img/closeIcon.png" alt="" width={30} />
            </div>
          </div>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="menu-list"
          >
            {dataLink?.map((item: any, i: number) => (
              <div className="overflow-hidden" key={i}>
                <MenuNavLink
                  href={item?.href}
                  name={item?.name}
                  setIsActive={setIsActive}
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="sosmed overflow-hidden"
          >
            {dataSosmed?.map((item: any, i: number) => (
              <motion.a
                variants={logoVars}
                href={item?.href}
                target="_blank"
                key={i}
                onClick={() => setIsActive(false)}
              >
                {item?.name}
              </motion.a>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}

const MenuNavLink = ({ name, href, setIsActive }: any) => {
  const linkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };
  return (
    <motion.div variants={linkVars} onClick={() => setIsActive(false)}>
      <NavLink to={href}>{name}</NavLink>
    </motion.div>
  );
};
