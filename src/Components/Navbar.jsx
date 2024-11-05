import React from 'react'
import './index.css'

function Navbar() {
  return (
    <>
      <div className="head">
        <div className="logo"></div>
        
            <ul className="items">
                <li>Home</li>
                <li>APOD</li>
                <li>Neows</li>
            </ul>
        <div className="darkmode">
        <input type="checkbox" id="check" />
        <label for="check" className="button"></label>
      </div>
      </div>
    </>
  )
}

export default Navbar
