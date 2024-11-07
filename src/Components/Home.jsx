import React, { useState, useEffect, useContext } from "react";
import { DataContext, queryContext } from "../Context/UserContext";
import Card from "./Card";
import axios from "axios";

function Home() {
  const value = useContext(DataContext);
  const {query, setQuery} = useContext(queryContext);
  const [loading, setLoading] = useState(false);
let timer;
  const debounce=function(fn,d){
    return function(){
      clearTimeout(timer);
      timer=setTimeout(() => {
        fn()
      }, d);
    }
  }

  async function fetchNASAImages() {
    setLoading(true);
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
      value.setData(response.data.collection.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
      setLoading(false);
  }

  const debouncedFetchNASAImages = debounce(fetchNASAImages, 1000);
  useEffect(() => {
    if (query) {
      debouncedFetchNASAImages();
    }
    else{
      setQuery([])
    }
  }, [query]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className="content">
        {loading ? <div className="loading"></div> : value.Data ? <Card /> : <p>No images found.</p>}
      </div>
    </>
  );
}

export default Home;
