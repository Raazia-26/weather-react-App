import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />

        <footer>
          This project was coded by Raazia Razi and is{" "}
          <a
            href="https://github.com/Raazia-26/weather-react-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
