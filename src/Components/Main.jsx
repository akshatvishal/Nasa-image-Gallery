import React, { useState,useEffect } from 'react'
import { useContext } from 'react';
import { DataContext } from '../Context/UserContext';
import Card from './card';
import axios from 'axios'
 
function Main() {
  const value=useContext(DataContext);
    async function fetchNASAImages() {
        try {
            const url = `https://images-api.nasa.gov/search?media_type=image`;
            const response = await axios.get(url); 
            value.setData(response.data.collection.items);

        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
      fetchNASAImages(); 
    }, []);


  return (
    <div className='content'>
      {value.Data ? (
      <Card/>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  )
}

export default Main
