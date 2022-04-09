import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import getData from './Services/getData';

function App() {

  const [temp, setTemp] = useState(0)
  const [weather, setWeather] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [icon, setIcon] = useState('')
  const [isCelsious, setIsCelsious] = useState(false)
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos) =>{
      const lat = pos.coords.latitude
      const long = pos.coords.longitude 
      getData(lat, long)
        .then((res)=>{
          setTemp(res.data.current.temp_c)
          setWeather(res.data.current.condition.text)
          setCountry(res.data.location.country)
          setCity(res.data.location.name)
          setIcon(res.data.current.condition.icon)
        })
        .catch((err)=>{
          console.error(err)
        })
        
    })

  }, [])
    

  return (
    <div className="App" id="App">
      <div className="weather-app ">
        <div className="card">
          <h3 className='city' >{city}</h3>
          <h3 className='country' >{country}</h3>
          <div>
            <h2 className='temp'>{isCelsious? temp: Math.floor(temp * (9/5)) + 32 }{isCelsious? '°C' : '°F'}</h2>
            <button className='btn-conversion' onClick={() =>setIsCelsious(!isCelsious)} >Cambiar a {isCelsious? '°F':'°C'}</button>
          </div>
          <h2 className='weather' >{weather}</h2>
          <img className='icon' src={icon} alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default App;
