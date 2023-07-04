import React, { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import axios from "axios";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/quotes",
    };

    try {
      const response = await axios.request(options);
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    axios
      .get(`http://localhost:8000/quotes`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setQuotes(response.data.quotes);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          content={quote.content}
          authorName={quote.author}
        />
      ))}
    </>
  );
}
