import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        Notes_
        <FaPencilAlt style={{ fontSize: "20px" }} className="icon-dark-mode" />
      </h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle-dark-mode"
      >
        <CgDarkMode className="icon-dark-mode" />
      </button>
    </div>
  );
};

export default Header;



