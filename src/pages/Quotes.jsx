import React from "react";
import QuoteList from "../components/quotes/QuoteList";

function Quotes(props) {
  return (
    <div>
      <QuoteList quotes={props.quotes} />
    </div>
  );
}

export default Quotes;
