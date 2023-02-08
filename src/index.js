import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ReviewsProvider } from "./contexts/Reviews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReviewsProvider>
      <App />
    </ReviewsProvider>
  </BrowserRouter>
);
