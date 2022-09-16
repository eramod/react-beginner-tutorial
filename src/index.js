import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// React tutorial: https://www.taniarascia.com/getting-started-with-react/

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
