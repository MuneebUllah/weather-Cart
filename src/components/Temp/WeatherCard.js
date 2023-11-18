import React, { useEffect, useState } from 'react'

export default function WeatherCard({tempInfo}) {
    const [weatherState,setWeatherState]= useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        country,
        sunset,
        sunrise,
        speed,
        name
    }=tempInfo
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case"Clouds":setWeatherState("wi-day-cloudy");
                break;
                case "Haze":setWeatherState("wi-fog");
                break;
                case "Clear":setWeatherState("wi-day-sunny");
                break;
                case "Mist":setWeatherState("wi-dust");
                break;



            }
        }
},[weathermood])
    let sec=tempInfo.sunset;
    let date = new Date(sec *1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <div>
      <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>{temp}&deg;</div>
            <div className='description'>
            <span className='weatherCondition'>{weathermood}</span>
            <span className='place'>{name},{country}</span>
            </div>
        </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p >
                            <i className={'wi wi-sunset'}></i>
                        </p>
                        <div className='extra-info-leftside'>
                            <span>{timeStr}</span><br/>
                            <span>Sunset</span>
                        </div>
                    </div>
                    <div className='two-sided-section'>
                        <p >
                            <i className={'wi wi-humidity'}></i>
                        </p>
                        <div className='extra-info-leftside'>
                            <span>{tempInfo.humidity}%</span><br/>
                            <span>Humidity</span>
                        </div>
                    </div>
                    </div>
                    <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p >
                            <i className={'wi wi-rain'}></i>
                        </p>
                        <div className='extra-info-leftside'>
                            <span>{tempInfo.pressure}Pha</span><br/>
                            <span>Pressure</span>
                        </div>
                    </div>
                    <div className='two-sided-section'>
                        <p >
                            <i className={'wi wi-strong-wind'}></i>
                        </p>
                        <div className='extra-info-leftside'>
                            <span>{tempInfo.speed}km/s</span><br/>
                            <span>Speed</span>
                        </div>
                    </div>
                    </div>
                 
                </div>
            

    </article>
    </div>
  )
}
