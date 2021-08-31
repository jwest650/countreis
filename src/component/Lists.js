import React from "react";
import Items from "./Items";

const Lists = ({ countries }) => {
  return (
    <div className="row  ">
      {countries.map((country) => (
        <Items key={country.numericCode} {...country} />
      ))}
    </div>
  );
};

export default Lists;
