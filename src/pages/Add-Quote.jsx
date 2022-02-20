import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
function AddQuote(props) {
  const history = useHistory();
  const onAddQuoteHandler = (quote) => {
    history.push("/quotes");
  };
  return (
    <div>
      <QuoteForm onAddQuote={onAddQuoteHandler} />
    </div>
  );
}

export default AddQuote;
