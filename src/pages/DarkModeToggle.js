import React, { useState, useEffect } from "react";
import './DarkModeToggle.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <DarkModeIcon fontSize="large" /> :<LightModeIcon fontSize="large"/>  }
    </button>
  );
};

export default DarkModeToggle;
