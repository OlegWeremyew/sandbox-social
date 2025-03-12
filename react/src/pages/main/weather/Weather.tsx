import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { mockData } from '@/pages/main/weather/mockData.ts';

interface WeatherResponse {
  elevation: 0;
  lat: string; // "37.81021N"
  lon: string; // "122.42282W"
  timezone: string; // "America/Los_Angeles"
  units: string; // "us"
  data: WeatherData[];
}

interface WeatherData {
  cloud_cover: number;
  date: string; // "2021-08-24T00:00:00"
  dew_point: number;
  feels_like: number;
  humidity: number;
  icon: number;
  ozone: number;
  pressure: number;
  summary: string; // "Partly sunny"
  temperature: number;
  weather: string; // "partly_sunny"
  wind_chill: number;
  precipitation: {
    total: number,
    type: string // "none"
  };
  wind: {
    angle: number
    dir: string // "SW"
    gusts: number
    speed: number
  };
}


const Weather: FC = () => {
  //todo Free Weather Api - https://ai-weather-by-meteosource.p.rapidapi.com
  // site - https://rapidapi.com/MeteosourceWeather
  // username - olegweremey
  // mail - olegweremey1994dev@gmail.com
  // password - frontend_developer1F
  // API_KEY - "5dac44e400mshda0b3604c679269p1eec47jsn5ba89d248f58"

  const [weather, setWeather] = useState<WeatherData[]>(mockData.data);

  // todo complete it correct
  // useEffect(() => {
  //   (async () => {
  //     const {data} = await axios.get<WeatherResponse>('https://ai-weather-by-meteosource.p.rapidapi.com/time_machine', {
  //       params: {
  //         lat: '37.81021',
  //         lon: '-122.42282',
  //         date: '2021-08-24',
  //         units: 'auto'
  //       },
  //       headers: {
  //         'x-rapidapi-key': '5dac44e400mshda0b3604c679269p1eec47jsn5ba89d248f58',
  //         'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  //       }
  //     });
  //     console.log('data', data);
  //     setWeather(data.data);
  //   })();
  // }, []);

  return (
    <div>
      <h1>Weather</h1>
      {weather.map(({ summary, temperature, date, wind }: WeatherData) => (
        <div key={Math.random()}>
          <h3>{summary} temperature - <span>{temperature}</span></h3>
          <time dateTime={date}>{date}</time>
          <div>
            <h4>wind</h4>
            <ul>
              <li>speed - {wind.speed}</li>
              <li>gusts - {wind.gusts}</li>
              <li>angle - {wind.angle}</li>
              <li>dir - {wind.dir}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Weather;
