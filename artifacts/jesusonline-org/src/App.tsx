import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LPHeader } from "@/components/layout/LPHeader";
import { XPHeader } from "@/components/layout/XPHeader";

// LP funnel entry
import KingdomnomicsGiftOfHeaven from "@/pages/lp/KingdomnomicsGiftOfHeaven";

// XP survey response pages
import NoDidntPray from "@/pages/xp/NoDidntPray";
import YesReceivedJesus from "@/pages/xp/YesReceivedJesus";
import YesRededicated from "@/pages/xp/YesRededicated";
import NoAlreadyReceived from "@/pages/xp/NoAlreadyReceived";

function LayoutHeader() {
  const [location] = useLocation();
  if (location.startsWith("/xp")) return <XPHeader />;
  return <LPHeader />;
}

function SimpleFooter() {
  const [location] = useLocation();
  const isXP = location.startsWith("/xp");
  return (
    <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100 bg-white">
      © JesusOnline Ministry &nbsp;·&nbsp;{" "}
      {isXP ? (
        <a href="https://app.jesusonline.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">app.jesusonline.com</a>
      ) : (
        <a href="https://jesusonline.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">jesusonline.com</a>
      )}
    </footer>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <LayoutHeader />
      <main className="flex-1">
        <Switch>
          {/* Root redirects to the LP */}
          <Route path="/">
            <Redirect to="/lp/kingdomnomics-gift-of-heaven" />
          </Route>

          {/* LP landing page */}
          <Route path="/lp/kingdomnomics-gift-of-heaven" component={KingdomnomicsGiftOfHeaven} />

          {/* XP survey response pages */}
          <Route path="/xp/no-i-didnt-pray" component={NoDidntPray} />
          <Route path="/xp/yes-i-received-jesus" component={YesReceivedJesus} />
          <Route path="/xp/yes-i-rededicated" component={YesRededicated} />
          <Route path="/xp/no-already-received" component={NoAlreadyReceived} />

          {/* Catch-all → LP */}
          <Route>
            <Redirect to="/lp/kingdomnomics-gift-of-heaven" />
          </Route>
        </Switch>
      </main>
      <SimpleFooter />
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
