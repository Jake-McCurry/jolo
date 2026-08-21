import { renderToStringAsync } from "preact-render-to-string";
import { Router as WouterRouter } from "wouter";
import type { BaseLocationHook } from "wouter";
import { AppRoutes } from "./App";

export async function render(url: string): Promise<string> {
  const staticHook: BaseLocationHook = () => [url, () => url];
  return await renderToStringAsync(
    <WouterRouter hook={staticHook} base="">
      <AppRoutes />
    </WouterRouter>,
  );
}
