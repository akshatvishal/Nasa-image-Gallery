import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function Apod() {
  // const apikey = process.env.API_KEY;
  const [apod, setApod] = useState(null);
  async function fetchapod() {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setApod(response.data);
      console.log(apod);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchapod();
  }, []);

  return (
    <div>
      {apod ? (
        <div className="boxes">
          <div className="image-container">
            <div className="gradient"></div>
            <img className="backer" src={apod.url} alt={apod.title} />
          </div>
          <div className="describe">
            <h1>{apod.title}</h1>
            <p>{apod.explanation}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Apod;
