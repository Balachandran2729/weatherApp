import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useRef } from 'react';
const Feach = ({searchCity,setSearchCity,setCity}) => {

  const inputRef=useRef()
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(searchCity);
    setSearchCity('');  
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city"></label>
        <input
          type="text"
          id="city"
          placeholder="Enter City"
          required
          ref={inputRef}
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button 
          type="submit"
          onClick={()=>inputRef.current.focus()}
        ><TiWeatherPartlySunny /></button>
      </form>
    </div>
  )
}

export default Feach