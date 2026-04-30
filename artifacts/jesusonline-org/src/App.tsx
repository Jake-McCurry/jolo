import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import DiscoverEvidence from "@/pages/DiscoverEvidence";
import ReceiveJesus from "@/pages/ReceiveJesus";
import FollowJesus from "@/pages/FollowJesus";
import ForeverLoved from "@/pages/ForeverLoved";
import GodIsHope from "@/pages/GodIsHope";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/discover-evidence" component={DiscoverEvidence} />
          <Route path="/receive-jesus" component={ReceiveJesus} />
          <Route path="/follow-jesus" component={FollowJesus} />
          <Route path="/forever-loved" component={ForeverLoved} />
          <Route path="/god-is-hope" component={GodIsHope} />
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
