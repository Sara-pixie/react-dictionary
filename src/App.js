import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './App.css';

export default function App(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setloaded] = useState(false);
  const apiUrlEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  
  function handleApiResponse (response){
    setResults(response.data);
  }
  function search(){
    axios.get(apiUrlEndpoint + keyword).then(handleApiResponse);
  }
  function handleSubmit (event){
    event.preventDefault();
    search();
  }
  function handleKeywordChange (event){
    setKeyword(event.target.value);
  }
  function load(){
    setloaded(true);
    search();
  }

  if (loaded){
    return (
      <div className="App">
        <h1>Dictionary</h1>
        <p>What do you want to look up?</p>
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} placeholder="Search..." onChange={handleKeywordChange} />
          <button type="submit">Go</button>
        </form>
        <Results info={results}/>
        <footer>
          Coded by Sara Paranuk and open-sourced on 
          <a href="https://github.com/Sara-pixie/react-dictionary" target="_blank" rel="noreferrer"> GitHub</a>
        </footer>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

