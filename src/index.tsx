import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
