import renderToString from "preact-render-to-string";
import { Router as WouterRouter } from "wouter";
import { AppRoutes } from "./App";

export function render(url: string): string {
  const staticHook = () => [url, (_: string) => {}] as const;
  return renderToString(
    <WouterRouter hook={staticHook} base="">
      <AppRoutes />
    </WouterRouter>
  );
}
