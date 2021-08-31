import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Selected from "./Selected";
import Header from "./Header";
import Lists from "./Lists";
const Main = () => {
  let [country, setCountry] = useState([]);
  let [search, setSearch] = useState("");
  let [filter, setFilter] = useState("");

  function searchHandler(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function filterHandler(e) {
    setFilter(e.target.value);
    console.log(filter);
  }

  useEffect(() => {
    let API;

    if (search !== "") {
      API = `https://restcountries.eu/rest/v2/name/${search}`;
    } else if (filter !== "") {
      API = `https://restcountries.eu/rest/v2/region/${filter}`;
    } else if (!search && !filter) {
      API = "https://restcountries.eu/rest/v2/all";
    }

    axios
      .get(API)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search, filter]);
  return (
    <BrowserRouter>
      <div className="container-fluid  ">
        <Switch>
          <Route exact path="/">
            <Header searched={searchHandler} filtered={filterHandler} />

            <Lists countries={country} />
          </Route>
          <Route path="/:name" children={<Selected />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Main;
