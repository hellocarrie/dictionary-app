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

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 class="title">Dictionary</h1>
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hints">
          suggested search terms : plants, sunset, dog, yoga
        </div>
      </section>
      <br />
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
