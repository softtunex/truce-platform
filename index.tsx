import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

/**
 * World-class entry point.
 * Global styles are loaded via index.html and index.css for optimal performance.
 */
const renderApp = () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
};

// Start rendering
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApp);
} else {
  renderApp();
}
