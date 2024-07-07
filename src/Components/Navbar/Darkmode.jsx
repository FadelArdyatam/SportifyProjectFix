import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ?
      localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add('dark')
      localStorage.setItem('theme', "dark");
    } else {
      element.classList.remove('dark')
      localStorage.setItem('theme', "light");
    }
  }, [element.classList, theme]);

  // nii gatau bener apa kagak

  return (
    <div className=" cursor-pointer">
      {theme === 'dark' ? (
        <BiSolidSun onClick={() => setTheme ('light')} />
      ) : (
        <BiSolidMoon onClick={() => setTheme ('dark')} />
      )}
    </div>
  );
};

export default Darkmode