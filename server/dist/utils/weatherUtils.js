"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey = "fa48bdb79f38d39da129310bef1abaf2";
// Função que recebe os dados da Api OpenWeather e retorna o clima que está em determinada cidade
async function getWeatherData(city) {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data.weather[0].main;
}
exports.default = getWeatherData;
