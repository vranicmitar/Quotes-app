import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function QuoteAdd() {
  const [inputQuote, setInputQuote] = useState({
    content: "",
    author: "",
    tags: "",
  });

  return (
    <div>
      <h1 className="text-center text-3xl">Add Quote</h1>
      <form className="form">
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
        <Button type="submit">Add Quote</Button>
      </form>
    </div>
  );
}
