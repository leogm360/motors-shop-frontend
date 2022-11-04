import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./contexts";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
