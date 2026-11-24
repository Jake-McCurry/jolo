import { Suspense } from "react";
import {
  Switch,
  Route,
  Router as WouterRouter,
  useLocation,
  Redirect,
} from "wouter";
import { LPHeader } from "@/components/layout/LPHeader";
import { XPHeader } from "@/components/layout/XPHeader";
import { pages } from "./page-loaders";

const XP_STYLE_LP_ROUTES = [
  "/lp/jesus-resurrection-and-you-ttn",
  "/lp/gift-of-heaven-ttn",
];

function LayoutHeader() {
  const [rawLocation] = useLocation();
  const location =
    rawLocation !== "/" ? rawLocation.replace(/\/+$/, "") : rawLocation;
  if (XP_STYLE_LP_ROUTES.includes(location)) return <XPHeader />;
  if (location.startsWith("/xp")) return <XPHeader />;
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
            <Route path="/" component={pages.Home.Component} />
            <Route path="/contact" component={pages.Contact.Component} />

            <Route
              path="/lp/gift-of-heaven-ttn"
              component={pages.Gift.Component}
            />
            <Route
              path="/lp/jesus-resurrection-and-you-ttn"
              component={pages.Resurrection.Component}
            />
            <Route path="/lp/gift-of-heaven">
              <Redirect to="/lp/gift-of-heaven-ttn" />
            </Route>
            <Route path="/lp/kingdomnomics-gift-of-heaven">
              <Redirect to="/lp/gift-of-heaven-ttn" />
            </Route>

            <Route
              path="/video/the-gift-of-heaven"
              component={pages.GiftVideo.Component}
            />
            <Route
              path="/video/jesus-resurrection-and-you"
              component={pages.ResurrectionVideo.Component}
            />
            <Route
              path="/video/your-life-has-purpose"
              component={pages.Purpose.Component}
            />
            <Route
              path="/video/is-jesus-relevant-to-you"
              component={pages.Relevant.Component}
            />

            <Route path="/xp/no-i-didnt-pray" component={pages.DidNotPray.Component} />
            <Route
              path="/xp/yes-i-received-jesus"
              component={pages.Received.Component}
            />
            <Route path="/xp/yes-i-rededicated" component={pages.Rededicated.Component} />
            <Route
              path="/xp/no-already-received"
              component={pages.Believer.Component}
            />

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
