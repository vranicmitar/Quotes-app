import React, { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import axios from "axios";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => setQuotes(res.data.quotes))
      .catch((err) => console.log(err));
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
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          content={quote.content}
          authorName={quote.author}
          upvotesCount={quote.upvotesCount}
          downvotesCount={quote.downvotesCount}
        />
      ))}
    </>
  );
}
