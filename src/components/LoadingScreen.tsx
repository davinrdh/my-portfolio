// src/components/LoadingScreen.tsx
import React from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <motion.div
      className="loading-screen d-flex flex-column justify-content-center align-items-center vh-100"
      transition={{duration: 1}}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="loading-logo"
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="img-fluid mb-3"
        />
      </motion.div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%`}}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progress}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
