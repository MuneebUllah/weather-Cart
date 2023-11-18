import React, { useState } from 'react'
import './../style/style.css'
import { useEffect } from 'react'
import WeatherCard from './WeatherCard'

export default function TempApp() {
    const [searchValue,setSearchValue] = useState("rahimyar khan")
    const [tempInfo,setTempInfo] = useState({})
    const getweatherInfo= async ()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c4581cdb073bceb8d69c1cc3ceaf1d39`
            let res = await fetch(url);
            let data = await res.json();
            let {temp,humidity,pressure} = data.main;
            let {main:weathermood} = data.weather[0];
            let {country,sunset,sunrise} = data.sys;
            let {speed} = data.wind;
            let {name} = data;
            // console.log(temp,humidity,pressure)
            let newWeatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                country,
                sunset,
                sunrise,
                speed,
                name
            }
           
            setTempInfo(newWeatherInfo)
        } catch (error) {
            console.log(error)
        }
        }
     useEffect(()=>{
        getweatherInfo();
    },[])
  return (
    <>
    <div className='wrap'>
      <div className='search'>
        <input type='search' 
               className='searchTerm' 
               placeholder='search.....' 
               autoFocus 
               id='search' 
               value={searchValue} 
               onChange={(e)=>setSearchValue(e.target.value)}/>
      <button className='searchButton' type='button' onClick={getweatherInfo}>Search</button>
      </div>
    </div>
    <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}
