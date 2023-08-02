import ReactDOM from "react-dom/client";
import "./global.css";
import { ReduxToolkitProvider } from "./redux-toolkit/ReduxToolkitProvider";
import { MobXProvider } from "./mobX/MobXProvider"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="wrapper">
    <ReduxToolkitProvider />
    <MobXProvider/>
  </div>
);
