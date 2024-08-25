import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import LogoLoader from "./components/LogoLoader";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import UnderConstruction from "./components/UnderConstruction";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <HelmetProvider>
          {" "}
          {/*For indexing seo <forceRefresh={true}>*/}
          <LogoLoader />
          <App />
        </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
