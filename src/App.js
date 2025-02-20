import './App.css';
import DisplayOut from './DisplayOut';
import Feach from './Feach';
import { useState ,useEffect } from 'react'

function App() {

  const [weather, setWeather] = useState({});
  const[city,setCity]=useState('Coimbatore');
  const[searchCity,setSearchCity]=useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff8898f33eb7214b29679f45f3bf39cd`;
        const response = await fetch(WEATHER_API);      
        if(!response.ok){
          throw new Error('Please enter valid city name or check your internet connection ⚠️');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getWeather(city);
  }, [city]);

  return (
    <div className='.App'>
      <Feach
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        setCity={setCity}
      />
      <DisplayOut
        weather={weather}
        error={error}
      />
    </div>
  );
}

export default App;
