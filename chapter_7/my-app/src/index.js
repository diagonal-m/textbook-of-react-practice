import ReactDom from "react-dom";
import { App } from "./App";
import { AdmingFlagProvider } from "./components/providers/AdminFlagProvider"

ReactDom.render(
  <AdmingFlagProvider>
    <App />
  </AdmingFlagProvider>,
  document.getElementById("root")
);