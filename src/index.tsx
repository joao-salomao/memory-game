import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root") as HTMLElement
);
