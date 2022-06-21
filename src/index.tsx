import * as React from "react";
// import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";

import App from "./App";

const container = document.getElementById("root");

// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container,
);

// root.render(app);
