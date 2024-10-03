import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router step 2 */}
    {/* recoil step 2 */}
    <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
