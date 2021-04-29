import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './App.css';

export default function App(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  const apiUrlEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  const pexelsApiKey = "563492ad6f91700001000001a3dc11e17fb1440db798f1c33646cef7";
  const pexelsUrlEndpoint = "https://api.pexels.com/v1/search?query=";
  const headers = { Authorization: `Bearer ${pexelsApiKey}` };

  function handleDictionaryApiResponse (response){
    setResults(response.data);
  }
  function handlePexelsApiResponse (response){
    setPhotos(response.data.photos);
  }
  function search(){
    axios.get(apiUrlEndpoint + keyword).then(handleDictionaryApiResponse);
    axios.get(`${pexelsUrlEndpoint}${keyword}&per_page=9`, {headers: headers}).then(handlePexelsApiResponse);
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
        <h1><i className="fas fa-laugh-beam left"></i> Dictionary <i className="fas fa-laugh-beam right"></i></h1>
        <p>What do you want to look up?</p>
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} placeholder="Search..." onChange={handleKeywordChange} />
          <button type="submit">Go</button>
        </form>
        <Results info={results} />
        <Photos photos={photos} />
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

