import renderToString from "preact-render-to-string";
import { Router as WouterRouter } from "wouter";
import type { BaseLocationHook } from "wouter";
import { AppRoutes } from "./App";

export function render(url: string): string {
  const staticHook: BaseLocationHook = () => [url, () => url];
  return renderToString(
    <WouterRouter hook={staticHook} base="">
      <AppRoutes />
    </WouterRouter>
  );
}
