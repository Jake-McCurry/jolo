import { renderToStringAsync } from "preact-render-to-string";
import { Router as WouterRouter } from "wouter";
import type { BaseLocationHook } from "wouter";
import { AppRoutes } from "./App";
import { pageForPath } from "./page-loaders";

export const pageModuleForPath = (url: string) => pageForPath(url).moduleId;

export async function render(url: string): Promise<string> {
  await pageForPath(url).load();
  const staticHook: BaseLocationHook = () => [url, () => url];
  return await renderToStringAsync(
    <WouterRouter hook={staticHook} base="">
      <AppRoutes />
    </WouterRouter>,
  );
}
