import { render, h } from "preact";
import "./style.css";

import { ConfigPopup } from "./pages/config-popup";

export function App() {
  return <ConfigPopup />;
}

render(<App />, document.getElementById("app"));
