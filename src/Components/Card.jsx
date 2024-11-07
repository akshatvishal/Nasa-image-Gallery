import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

function Card() {
  const value = useContext(DataContext);
  const navigate=useNavigate();
  
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    if (value.Data) {
      value.Data.forEach((item) => {
        const img = new Image();
        img.src = item.links[0].href;

        img.onload = () => {
          if(img.naturalHeight < 2200){
            setImageDimensions((prevDimensions) => ({
              ...prevDimensions,
              [item.data[0].nasa_id]: img.naturalHeight > img.naturalWidth ? "portrait" : "landscape"
            }));
          }
        };
      });
    }
  }, [value.Data]);

  return (
    <>
      {value.Data ? (
        value.Data.map((item) => {
          const orientation = imageDimensions[item.data[0].nasa_id];
          return (
            orientation &&
            <div
              className={`card ${orientation === "portrait" ? "portrait" : "landscape"}`}
              key={item.data[0].nasa_id}
              onClick={()=>navigate(`/Home/${item.data[0].nasa_id}`)}
            >
              <div className="inner">
                <div className="front">
                  <img src={item.links[0].href} alt="meow" />
                </div>
                <div className="back">
                  <h1>{item.data[0].description}</h1>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No image...</p>
      )}
    </>
  );
}

export default Card;
