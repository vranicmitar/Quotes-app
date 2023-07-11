import React, { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import axios from "axios";
import { Box, Button, Modal, Pagination } from "@mui/material";
import QuoteAdd from "../../components/QuoteAdd/QuoteAdd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 650,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 5,
};

export default function Quotes() {
  const [addQuote, setAddQuote] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  }, [quotes, addQuote]);
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
        <Button
          variant="contained"
          sx={{ marginLeft: "40%", width: "250px" }}
          onClick={handleOpen}
        >
          Add quote
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <QuoteAdd render={setAddQuote} />
          </Box>
        </Modal>
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
