import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Description() {
  const { nasa_id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    try {
      const res = await axios.get(
        `https://images-api.nasa.gov/search?nasa_id=${nasa_id}`
      );
      setData(res.data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="box">
      <h2 className="title">{data.collection.items[0].data[0].title}</h2>

      <div className="right">
        <img src={data.collection.items[0].links[0].href} alt="" />
        <div className="texting">{data.collection.items[0].data[0].description}</div>
      </div>
    </div>
  );
}

export default Description;
