import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import { pageForPath } from "./page-loaders";
import "./index.css";

const root = document.getElementById("root")!;
async function start() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = window.location.pathname;
  const path = base && (pathname === base || pathname.startsWith(base + "/"))
    ? pathname.slice(base.length) || "/"
    : pathname;
  await pageForPath(path).load();
  if (root.childNodes.length > 0) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
}

// Keep server-rendered content visible if the network fails; report the error
// instead of wiping the page or silently substituting another page.
void start().catch((error) => console.error("Could not load the current page", error));
