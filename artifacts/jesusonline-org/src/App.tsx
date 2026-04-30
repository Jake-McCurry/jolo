import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/Header";
import { LPHeader } from "@/components/layout/LPHeader";
import { XPHeader } from "@/components/layout/XPHeader";
import { Footer } from "@/components/layout/Footer";

// Main pages
import Home from "@/pages/Home";
import DiscoverEvidence from "@/pages/DiscoverEvidence";
import ReceiveJesus from "@/pages/ReceiveJesus";
import FollowJesus from "@/pages/FollowJesus";
import ForeverLoved from "@/pages/ForeverLoved";
import GodIsHope from "@/pages/GodIsHope";
import NotFound from "@/pages/not-found";

// LP funnel pages
import KingdomnomicsGiftOfHeaven from "@/pages/lp/KingdomnomicsGiftOfHeaven";

// XP experience pages
import NoDidntPray from "@/pages/xp/NoDidntPray";
import YesReceivedJesus from "@/pages/xp/YesReceivedJesus";
import YesRededicated from "@/pages/xp/YesRededicated";
import NoAlreadyReceived from "@/pages/xp/NoAlreadyReceived";

function LayoutHeader() {
  const [location] = useLocation();
  if (location.startsWith("/lp")) return <LPHeader />;
  if (location.startsWith("/xp")) return <XPHeader />;
  return <Header />;
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <LayoutHeader />
      <main className="flex-1">
        <Switch>
          {/* Main site pages */}
          <Route path="/" component={Home} />
          <Route path="/discover-evidence" component={DiscoverEvidence} />
          <Route path="/receive-jesus" component={ReceiveJesus} />
          <Route path="/follow-jesus" component={FollowJesus} />
          <Route path="/forever-loved" component={ForeverLoved} />
          <Route path="/god-is-hope" component={GodIsHope} />

          {/* /lp/ landing pages — jesusonline.com nav */}
          <Route path="/lp/kingdomnomics-gift-of-heaven" component={KingdomnomicsGiftOfHeaven} />

          {/* /xp/ experience pages — app.jesusonline.com nav */}
          <Route path="/xp/no-i-didnt-pray" component={NoDidntPray} />
          <Route path="/xp/yes-i-received-jesus" component={YesReceivedJesus} />
          <Route path="/xp/yes-i-rededicated" component={YesRededicated} />
          <Route path="/xp/no-already-received" component={NoAlreadyReceived} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
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
