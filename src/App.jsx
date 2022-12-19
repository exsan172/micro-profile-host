import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil"

import RoutesApp from "./routes";
import "./index.scss";

ReactDOM.render(<RecoilRoot><RoutesApp /></RecoilRoot>, document.getElementById("app"));
