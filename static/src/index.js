import "bootstrap/dist/css/bootstrap.css";
import "./assets/sass/index.scss";
import { App } from "./app.jsx";
import {createRoot} from "react-dom/client";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App />);