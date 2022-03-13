import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Kelly Roan{" "}
          <a
            href="https://github.com/KellyDRD/weather_react_homework"
            target="_blank"
            rel="noreferrer"
          >
            and open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
