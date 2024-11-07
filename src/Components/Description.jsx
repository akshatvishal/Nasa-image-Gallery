import React from 'react'
import { useParams } from 'react-router-dom';

function Description() {
    const {nasa_id}=useParams();
    const [item,setitem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://images-api.nasa.gov/search?nasa_id=${nasa_id}`)
    console.log(res);
}
  return (
    <div>
      
    </div>
  )
}

export default Description
