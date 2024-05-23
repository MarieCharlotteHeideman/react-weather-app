import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://subtle-capybara-86bdf3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charlotte Heideman
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MarieCharlotteHeideman/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
