import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function App() {
  let [keyword, setKeyword] = useState("");
  const apiUrlEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  
  function handleApiResponse (response){
    console.log(response.data);
  }
  function search (event){
    event.preventDefault();
    axios.get(apiUrlEndpoint + keyword).then(handleApiResponse);
  }
  function handleKeywordChange (event){
    setKeyword(event.target.value);
  }

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <p>What do you want to look up?</p>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} placeholder="Search..." onChange={handleKeywordChange} />
        <button type="submit">Go</button>
      </form>
      <footer>
        Coded by Sara Paranuk
      </footer>
    </div>
  );
}

