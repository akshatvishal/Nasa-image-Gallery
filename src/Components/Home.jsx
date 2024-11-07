import React, { useState, useEffect, useContext } from "react";
import { DataContext, queryContext } from "../Context/UserContext";
import "./index.css";
import Card from "./Card";
import axios from "axios";

function Home() {
  const value = useContext(DataContext);
  const {query, setQuery} = useContext(queryContext);
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1);

  
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
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image&page_size=20&page=${page}`);
      return response.data.collection.items;
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
  }

  let timer;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data=await fetchNASAImages();
      value.setData(data)
      setLoading(false);
    };
    if(query){
      fetchData();
    }

  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNASAImages();
      if (data) {
        value.setData((prevData) => [...prevData, ...data]); // Append new data on page change
      }
    };

    fetchData();
  }, [page]);

  useEffect(()=>{
    window.addEventListener("scroll",handScroll)
  },[])

  const handleChange = (e) => {
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  };

  const handScroll=()=>{
    if((window.innerHeight+ document.documentElement.scrollTop+1)>=document.documentElement.scrollHeight)
    {
      setPage((prev)=> prev +1)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(e)
    }
  }

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
