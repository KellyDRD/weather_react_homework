import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search App</h1>
        <WeatherSearch />
        <footer>
          <a
            href="https://github.com/KellyDRD/weather_react_homework"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>
          , by Kelly Roan
        </footer>
      </div>
    </div>
  );
}
