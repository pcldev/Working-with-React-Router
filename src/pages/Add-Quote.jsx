import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
function AddQuote(props) {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quote) => {
    sendRequest(quote);
  };
  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={onAddQuoteHandler}
      />
    </div>
  );
}

export default AddQuote;
