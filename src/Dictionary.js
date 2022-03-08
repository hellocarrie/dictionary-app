import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="Dictionary">
      <p>Please enter a word to be searched</p>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      {keyword}
      <Results results={results} />
    </div>
  );
}
