import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else return quoteA.id < quoteB.id ? 1 : -1;
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const queryParam = new URLSearchParams(location.search);

  const isSortingAsc = queryParam.get("sort") === "asc";
  console.log(queryParam.get("page"));
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const changeSortingHandler = () => {
    history.push(`/?sort=${isSortingAsc ? "desc" : "asc"}&page=1`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
