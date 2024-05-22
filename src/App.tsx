/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePages from "./pages/Home/HomePages";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import ContactPages from "./pages/Contact/ContactPages";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <>
      <Router>
        <Header />
        {/* <LoadingScreen /> */}
        <Routes>
          <Route
            path="/"
            element={<HomePages />}
          />
          <Route path="/contact" element={<ContactPages />} />
        </Routes>
        <footer className="text-center">
          <div className="line-gradient"></div>
          <div className="d-flex justify-content-center gap-5 py-3">
            <a href="https://github.com/davinrdh" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/davin-ridha" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <NavLink to={'/contact'}>
              <i className="bi bi-envelope-at-fill"></i>
            </NavLink>
          </div>
        </footer>
      </Router>
    </>
  );
}
