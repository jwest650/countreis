import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
const Nav = ({ Handletoggle }) => {
  return (
    <div className="navbar p-2">
      <div className="nav-item">
        <h2>where in the world</h2>
      </div>
      <div className="nav-item">
        <h2>
          {" "}
          <MoonIcon className="moon" onClick={Handletoggle} />
          dark mode
        </h2>
      </div>
    </div>
  );
};

export default Nav;
