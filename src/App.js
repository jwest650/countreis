import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/Nav";
import Main from "./component/Main";

function App() {
  const [dark, setdark] = useState(false);

  function toggle(params) {
    setdark(!dark);
  }
  return (
    <div className={`app ${dark ? "darkmode" : "whitemode"}`}>
      <Nav Handletoggle={toggle} />
      <Main />
    </div>
  );
}

export default App;
