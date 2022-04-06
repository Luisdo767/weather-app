import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {

  const [temp, setTemp] = useState(0)
  const [weather, setWeather] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [icon, setIcon] = useState('')
  const [isCelsious, setIsCelsious] = useState(false)
  
  
  const successCallback = (position) =>{
    let lat = position.coords.latitude
    let long = position.coords.longitude
    let loc = lat + "," + long
    axios.get(`http://api.weatherapi.com/v1/current.json?key=e26de611417245dfaac164812220504&q=${loc}&aqi=no&lang=es`)
          .then(res=>{
            setTemp(res.data.current.temp_c)
            setCountry(res.data.location.country)
            setCity(res.data.location.name)
            setWeather(res.data.current.condition.text)
            setIcon(res.data.current.condition.icon)
          })
  }

  const errorCallback = (error) =>{
    console.error(error);
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

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
