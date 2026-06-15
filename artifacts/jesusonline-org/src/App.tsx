import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { LPHeader } from "@/components/layout/LPHeader";
import { XPHeader } from "@/components/layout/XPHeader";

const XP_STYLE_LP_ROUTES = ["/lp/jesus-resurrection-and-you-ttn"];

import KingdomnomicsGiftOfHeaven from "@/pages/lp/KingdomnomicsGiftOfHeaven";
import JesusResurrectionAndYou from "@/pages/lp/JesusResurrectionAndYou";

const NoDidntPray      = lazy(() => import("@/pages/xp/NoDidntPray"));
const YesReceivedJesus = lazy(() => import("@/pages/xp/YesReceivedJesus"));
const YesRededicated   = lazy(() => import("@/pages/xp/YesRededicated"));
const NoAlreadyReceived = lazy(() => import("@/pages/xp/NoAlreadyReceived"));

function LayoutHeader() {
  const [location] = useLocation();
  if (location.startsWith("/xp") || XP_STYLE_LP_ROUTES.includes(location)) return <XPHeader />;
  return <LPHeader />;
}

function SimpleFooter() {
  const [location] = useLocation();
  const isXP = location.startsWith("/xp");
  return (
    <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100 bg-white">
      © JesusOnline Ministries
    </footer>
  );
}

export function AppRoutes() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <LayoutHeader />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Switch>
            <Route path="/">
              <Redirect to="/lp/gift-of-heaven-ttn" />
            </Route>

            <Route path="/lp/gift-of-heaven-ttn" component={KingdomnomicsGiftOfHeaven} />
            <Route path="/lp/jesus-resurrection-and-you-ttn" component={JesusResurrectionAndYou} />
            <Route path="/lp/gift-of-heaven">
              <Redirect to="/lp/gift-of-heaven-ttn" />
            </Route>
            <Route path="/lp/kingdomnomics-gift-of-heaven">
              <Redirect to="/lp/gift-of-heaven-ttn" />
            </Route>

            <Route path="/xp/no-i-didnt-pray" component={NoDidntPray} />
            <Route path="/xp/yes-i-received-jesus" component={YesReceivedJesus} />
            <Route path="/xp/yes-i-rededicated" component={YesRededicated} />
            <Route path="/xp/no-already-received" component={NoAlreadyReceived} />

            <Route>
              <Redirect to="/lp/kingdomnomics-gift-of-heaven" />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <SimpleFooter />
    </div>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AppRoutes />
    </WouterRouter>
  );
}
