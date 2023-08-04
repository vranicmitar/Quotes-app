import { Button, FormGroup, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

export default function QuoteAdd({ render }) {
  const [opened, setOpened] = useState(false);
  const { setAllQuotes } = useContext(AppContext);
  const [inputQuote, setInputQuote] = useState({
    content: "",
    author: "",
    tags: [],
  });

  // const token = localStorage.getItem("token");

  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  // useEffect(() => {
  //   axios
  //     .post(
  //       "http://localhost:8000/quotes",
  //       {
  //         headers: { Authorization: "Bearer " + accessToken },
  //       },
  //       {
  //         content: inputQuote.content,
  //         author: inputQuote.author,
  //         tags: inputQuote.tags,
  //       }
  //     )
  //     .catch((err) => console.log(err));
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [render]);
  const quoteAdd = async (input) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/quotes",
        {
          content: input.quoteText,
          author: input.author,
          tags: input.tags,
        },
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );

      const info = response.data;

      console.log(info);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    quoteAdd();
  };
  return (
    <div>
      <h1 className="text-center text-3xl">Add Quote</h1>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          value={inputQuote.content}
          onChange={(event) =>
            setInputQuote((prev) => ({
              ...prev,
              content: event.target.value,
            }))
          }
          id="content"
          type="text"
          label="Enter quote"
          required
        ></TextField>

        <br></br>

        <TextField
          value={inputQuote.author}
          onChange={(event) =>
            setInputQuote((prev) => ({
              ...prev,
              author: event.target.value,
            }))
          }
          id="authorName"
          type="text"
          label="Enter author name"
          required
        ></TextField>

        <br></br>
        <TextField
          value={inputQuote.tags}
          onChange={(event) =>
            setInputQuote((prev) => ({
              ...prev,
              tags: event.target.value,
            }))
          }
          id="tags"
          label="Enter tags of the quote"
          required
        ></TextField>
        <br></br>

        <br></br>
        <Button type="submit" onClick={handleSubmit}>
          Add Quote
        </Button>
      </form>
    </div>
  );
}
