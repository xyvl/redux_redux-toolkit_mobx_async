import ReactDOM from "react-dom/client";
import "./global.css";
import { ReduxToolkitProvider } from "./redux-toolkit/ReduxToolkitProvider"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
  <ReduxToolkitProvider/>
  </>
);
