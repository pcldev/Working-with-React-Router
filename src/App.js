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

const INITIAL_STATE = [
  { key: 1, id: 1, author: "Long", text: "test" },
  { key: 2, id: 2, author: "Lank123", text: "Lank123" },
  { key: 3, id: 3, author: "afhbaf", text: "testasfasf" },
  { key: 4, id: 4, author: "Loasffdsng", text: "tesdfsdst" },
];
function App() {
  const [quotes, setQuotes] = useState(INITIAL_STATE);

  return (
    <>
      <MainNavigation />
      <section className={classes.main}>
        <Switch>
          <Redirect from="/quotes" to="/" exact />
          <Route path="/" exact>
            <Quotes quotes={quotes} />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail quotes={quotes} />
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
