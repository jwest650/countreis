import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const Selected = () => {
  const [selects, setSelect] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => {
        setSelect(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div className="container-fluid selected ">
      <Link to="/">
        <button className="arrow">
          <ArrowLeftIcon className="back" />
          Back
        </button>
      </Link>
      {selects.map((c) => {
        const {
          flag,
          population,
          capital,
          region,
          subregion,
          name,
          topLevelDomain,
          languages,
          borders,
          currencies,
          nativeName,
        } = c;
        return (
          <article className="row">
            <div className="col-md-6">
              <img src={flag} alt="" className="img-fluid " />
            </div>
            <section className="col-md-6 mt-5">
              <div className="row  ">
                <div className="col-md-6">
                  <h2>{name}</h2>
                  <h5>
                    <span>Native Name:</span> {nativeName}
                  </h5>
                  <h5>
                    <span>Population:</span>
                    {population}
                  </h5>
                  <h5>
                    <span>Region: </span>
                    {region}
                  </h5>
                  <h5>
                    <span> Sub Region:</span>
                    {subregion}
                  </h5>
                  <h5>
                    <span> Capital: </span>
                    {capital}
                  </h5>
                </div>
                <div className="col-md-6 nxt">
                  <h5>
                    <span>Top Level Domain:</span>
                    {topLevelDomain}
                  </h5>
                  <h5>
                    <span> Currencies:</span>
                    {currencies[0].code}
                  </h5>
                  <h5>
                    <span>Language:</span>
                    {languages[0].name}
                  </h5>
                </div>
                <div className="contanier relation">
                  <span>Border Countries:</span>
                  <button>{borders[0]}</button>
                  <button>{borders[1]}</button>
                  <button>{borders[2]}</button>
                </div>
              </div>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default Selected;
