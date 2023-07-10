import React, { useEffect, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./QuoteCard.css";

export default function QuoteCard({
  id,
  content,
  authorName,
  upvotesCount,
  downvotesCount,
  givenVote,
}) {
  const percent = Math.round(
    (upvotesCount / (upvotesCount + downvotesCount)) * 100
  );

  const [vote, setVote] = useState(givenVote);
  const [upVotesCount, setUpVotesCount] = useState(upvotesCount);
  const [downVotesCount, setDownVotesCount] = useState(downvotesCount);

  const accessToken = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log);
  }, []);

  let color;
  let color1;
  if (vote === "upvote") {
    color = "lightGreen";
  } else {
    color = "lightGrey";
  }

  if (vote === "downvote") {
    color1 = "red";
  } else {
    color1 = "lightGrey";
  }

  const style = {
    color: color,
  };

  const style1 = {
    color: color1,
  };

  const postUpvote = () => {
    axios
      .post(`http://localhost:8000/quotes/${id}/upvote`, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        // console.log(response.data.givenVote);
        setUpVotesCount(upVotesCount + 1);
        setVote(response.data.givenVote);
        toast("Successfully Votes Up!", {
          icon: "👍",
          style: {
            borderRadius: "0.8rem",
            backgroundColor: "#4e7768",
            color: "#f0fffa",
            boxShadow:
              "rgba(0, 0, 0, 0.6) 0px 4px 6px -1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
          },
        });
      })
      .catch((error) => {
        // console.log(error)
      });
  };
  const deleteUpvote = () => {
    axios
      .delete(`http://localhost:8000/quotes/${id}/upvote`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        // console.log(response.data.givenVote);
        setUpVotesCount(upVotesCount - 1);
        setVote(response.data.givenVote);
        toast("Successfully Deleted Vote!", {
          icon: "✐",
          style: {
            borderRadius: "0.8rem",
            backgroundColor: "#4e7768",
            color: "#f0fffa",
            boxShadow:
              "rgba(0, 0, 0, 0.6) 0px 4px 6px -1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
          },
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const postDownvote = () => {
    axios
      .post(`http://localhost:8000/quotes/${id}/downvote`, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        // console.log(response.data.givenVote);
        setDownVotesCount(downVotesCount + 1);
        setVote(response.data.givenVote);
        toast("Successfully Votes Down!", {
          icon: "👎",
          style: {
            borderRadius: "0.8rem",
            backgroundColor: "#4e7768",
            color: "#f0fffa",
            boxShadow:
              "rgba(0, 0, 0, 0.6) 0px 4px 6px -1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
          },
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const deleteDownvote = () => {
    axios
      .delete(`http://localhost:8000/quotes/${id}/downvote`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        // console.log(response.data.givenVote);
        setDownVotesCount(downVotesCount - 1);
        setVote(response.data.givenVote);
        toast("Successfully Deleted Vote!", {
          icon: "✐",
          style: {
            borderRadius: "0.8rem",
            backgroundColor: "#4e7768",
            color: "#f0fffa",
            boxShadow:
              "rgba(0, 0, 0, 0.6) 0px 4px 6px -1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
          },
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <>
      <section>
        <div class="container mt-11 px-10 py-4 mx-auto ">
          <div class="flex flex-wrap -m-0  grid-cols-2 ">
            <div class="p-4 md:w-1/1 w-full">
              <div class="h-full bg-gray-100 p-8 rounded flex justify-between items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">{content}</p>
                  <span class="title-font font-medium text-gray-900 ">
                    - {authorName}
                  </span>
                </div>
                <p className="text-center">
                  <ArrowDropUpIcon
                    sx={{ ...style }}
                    disabled={vote === "downvote"}
                    style={{ fontSize: "45px" }}
                    onClick={() =>
                      vote === "none"
                        ? postUpvote()
                        : vote === "upvote"
                        ? deleteUpvote()
                        : () => {}
                    }
                  ></ArrowDropUpIcon>
                  <p className="text-lg font-bold">{percent}%</p>
                  {upvotesCount} / {downvotesCount}
                  <br></br>
                  <ArrowDropDownIcon
                    sx={{ ...style1 }}
                    disabled={vote === "upvote"}
                    style={{ fontSize: "45px" }}
                    onClick={() =>
                      vote === "none"
                        ? postDownvote()
                        : vote === "downvote"
                        ? deleteDownvote()
                        : () => {}
                    }
                  ></ArrowDropDownIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
