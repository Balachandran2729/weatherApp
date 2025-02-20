import React from 'react'

const DisplayOut = ({weather,error}) => {

    const City = weather.name ? weather.name : null;
    const Temp = weather.main ? weather.main.temp : null;
    const Condi = weather.weather ? weather.weather[0].description : null;
    const Feel = weather.main ? weather.main.feels_like : null;
    const Wind = weather.wind ? weather.wind.speed : null;
    const Humidity = weather.main ? weather.main.humidity : null;
    const Pressure = weather.main ? weather.main.pressure : null;
    const SRise=weather.sys ? weather.sys.sunrise : null;
    const SSet=weather.sys ? weather.sys.sunset : null;
    const Temperature = (Temp - 273.15).toFixed(2) ;
    const FeelsLike = (Feel - 273.15).toFixed(2);
    const WindSpeed= (Wind * 3.6).toFixed(2);
    const SunRiseTime = SRise ? new Date(SRise * 1000).toLocaleTimeString() : "N/A";
    const SunSetTime = SSet ? new Date(SSet * 1000).toLocaleTimeString() : "N/A";

  return (
    <div>
        {(error) ? (<h1 className='error'>{error}</h1>):
        ( 
        <>
        <div className='city'>
            <h1>Location 🌏</h1>
            <p>{City}</p>
        </div>
        <div className='important-data'>
            <div>
                <h1>Temperature 🌡️</h1>
                <p>{Temperature}°C</p>
            </div>
            <div>
                <h1>Weather 🌦️</h1>
                <p>{Condi}</p>
            </div>
            <div>
                <h1>Feels Like 😒</h1>
                <p>{FeelsLike}°C</p>
            </div>
            <div>
                <h1>Wind Speed 🌬️</h1>
                <p>{WindSpeed}km/hr</p>
            </div>
        </div>
        <div className='other-data'>
            <div>
                <h1>Humidity 💧</h1>
                <p>{Humidity} %</p>
            </div>
            <div>
                <h1>Pressure 🌡️</h1>
                <p>{Pressure} hPa</p>
            </div>
            <div>
                <h1>Sunrise 🌅</h1>
                <p>{SunRiseTime}</p>
            </div>
            <div>
                <h1>Sunset 🌇</h1>
                <p>{SunSetTime}</p>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default DisplayOut