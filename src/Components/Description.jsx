import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Description() {
    const {nasa_id}=useParams();
  const datafectch=async()=>{
    const res=await axios.get(`https://images-api.nasa.gov/search?nasa_id=${nasa_id}`)
    console.log(res.data);
}
datafectch()
  return (
    <div>
      
    </div>
  )
}

export default Description
