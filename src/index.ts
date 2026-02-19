import "./index.css";
import { WeatherSounds } from "./components/weatherSounds/WeatherSounds";

document.addEventListener("DOMContentLoaded", () => {
  new WeatherSounds(".root");
});
