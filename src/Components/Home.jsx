import React, { useState, useEffect, useContext } from "react";
import { DataContext, queryContext } from "../Context/UserContext";
import "./index.css";
import Card from "./Card";
import axios from "axios";

function Home() {
  const value = useContext(DataContext);
  const {query, setQuery} = useContext(queryContext);
  const [loading, setLoading] = useState(false);

  
  const load=()=>{
    return(
      <div className="loadcontainer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
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
  let timer;
 
  useEffect(() => {
    fetchNASAImages()
    
  }, [query]);
  const handleChange = (e) => {
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
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
        {loading ? load() : value.Data ? <Card /> : <p>No images found.</p>}
      </div>
    </>
  );
}

export default Home;
