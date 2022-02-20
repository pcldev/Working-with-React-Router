import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

import { useState } from "react";
import Quotes from "./pages/Quotes";
import MainNavigation from "./components/layout/MainNavigation";

import classes from "./components/layout/Layout.module.css";
import QuoteDetail from "./pages/Quote-Detail";
import AddQuote from "./pages/Add-Quote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <MainNavigation />
      <section className={classes.main}>
        <Switch>
          <Redirect from="/" to="/quotes" exact />
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </section>
    </>
  );
}

export default App;
