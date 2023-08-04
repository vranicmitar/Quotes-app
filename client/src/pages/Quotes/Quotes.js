import React, { useContext, useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import axios from "axios";
import { Box, Button, Modal, OutlinedInput, Pagination } from "@mui/material";
import QuoteAdd from "../../components/QuoteAdd/QuoteAdd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  // const [addQuote, setAddQuote] = useState(false);
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

  // const handleChangee = (event) => {
  //   setSortDirection(event.target.value);
  // };

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
      <Box sx={{ width: 200, marginTop: 5, marginLeft: 15 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort Direction</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value
            label="Age"
            onChange
            input={<OutlinedInput label="Sort Direction" />}
          >
            <MenuItem value={10}>Asc</MenuItem>
            <MenuItem value={20}>Desc</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 200, marginLeft: 50, marginTop: -7 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value
            label="Age"
            onChange
            input={<OutlinedInput label="Sort By" />}
          >
            <MenuItem value={10}>Created At</MenuItem>
            <MenuItem value={20}>Author</MenuItem>
            <MenuItem value={30}>Up votes count</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
            <QuoteAdd />
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
