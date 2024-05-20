/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePages from "./pages/Home/HomePages";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'var(--primary)',
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  return (
    <>
      <Header /> 
      <motion.div 
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      />
      <Router>
        <Routes>
          <Route path="" element={<HomePages textEnter={textEnter} textLeave={textLeave} />} />
        </Routes>
      </Router>
    </>
  )
}
