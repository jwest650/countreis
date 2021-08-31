import React from "react";
import { Link } from "react-router-dom";
const Items = ({ name, flag, population, capital, region }) => {
  return (
    <div className="col-md-3  mb-5  ">
      <Link to={`${name}`}>
        <div className="card  items  shadow">
          <div className="image">
            <img src={flag} alt="" className="img-fluid  flag" />
          </div>
          <div className="card-body">
            <h3>{name}</h3>
            <p>
              <span>population:</span>
              {population}
            </p>
            <p>
              <span>Region:</span>
              {region}
            </p>
            <p>
              <span>capital:</span>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Items;
