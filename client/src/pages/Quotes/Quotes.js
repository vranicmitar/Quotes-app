import React, { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import axios from "axios";
import { Button, Pagination } from "@mui/material";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const quotesPerPage = 5;
  const numOfPages = Math.ceil(
    quotes.filter((quote) => quote.length / quotesPerPage)
  );

  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => setQuotes(res.data.quotes))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [quotes]);
  // const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/quotes", {
  //       headers: { Authorization: "Bearer " + accessToken },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log);
  // }, []);
  return (
    <>
      {quotes
        .map((quote) => (
          <QuoteCard
            key={quote.id}
            id={quote.id}
            content={quote.content}
            authorName={quote.author}
            upvotesCount={quote.upvotesCount}
            downvotesCount={quote.downvotesCount}
            givenVote={quote.givenVote}
          />
        ))
        .slice((page - 1) * quotesPerPage, page * quotesPerPage)}
      <div>
        <Button variant="contained" sx={{ marginLeft: "40%", width: "250px" }}>
          Add quote
        </Button>
      </div>
      <div style={{ marginLeft: "40%", padding: " 2rem" }}>
        <Pagination
          count={2}
          page={page}
          onChange={handleChange}
          size="large"
          color="error"
        />
      </div>
    </>
  );
}
