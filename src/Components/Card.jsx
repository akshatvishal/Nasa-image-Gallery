import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/UserContext";


function Card() {
  const value = useContext(DataContext);
  return (
    <>
      {value.Data ? (
        value.Data.map((item) => {
          console.log(item.links[0].href);
          return (
            <div className="card" key={item.id}>
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
