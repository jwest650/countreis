import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const Header = ({ searched, filtered }) => {
  return (
    <div className="container-fluid ">
      <div className=" row justify-content-between m-4">
        <div className=" col-md-10">
          <SearchIcon className="size" />

          <input
            type="text"
            placeholder="Search for country"
            onChange={searched}
            id="input"
            className="rounded form-control border-0 ps-5 "
            style={{ width: "250px" }}
          />
        </div>
        <div className="col-md ">
          <select
            name=""
            id="select"
            onClick={filtered}
            className="border-0 rounded form-select "
            style={{ width: "130px" }}
          >
            <option value="">Filter</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
