import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Store from "@/pages/Store";
import Vote from "@/pages/Vote";
import Rules from "@/pages/Rules";
import Bans from "@/pages/Bans";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/store" component={Store} />
      <Route path="/vote" component={Vote} />
      <Route path="/rules" component={Rules} />
      <Route path="/bans" component={Bans} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
