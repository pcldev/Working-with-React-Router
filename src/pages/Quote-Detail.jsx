import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetail(props) {
  const param = useParams();
  const quote = props.quotes.find((quote) => quote.id === +param.quoteId);
  if (!quote?.text || !quote?.author) {
    return <p>No Quote Found</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${param.quoteId}/comment`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
