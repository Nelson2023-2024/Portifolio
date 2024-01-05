import React, { useEffect } from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import "./DarkMode.css";

const DarkMode = () => {
  useEffect(() => {
    // Retrieve the theme from local storage when the component mounts
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.querySelector('body').setAttribute('data-theme', storedTheme);
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    // Store the selected theme in local storage
    localStorage.setItem('theme', 'dark');
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    // Store the selected theme in local storage
    localStorage.setItem('theme', 'light');
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onClick={toggleTheme}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <RiSunFill />
        <FaMoon />
      </label>
    </div>
  );
};

export default DarkMode;
