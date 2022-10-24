//file to run code on the browser (does not need to be rendered by server)
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
