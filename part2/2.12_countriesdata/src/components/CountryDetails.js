import { useState, useEffect } from "react";
import axios from "axios";
import CapitalWeather from "./CapitalWeather";

const CountryDetails = ({ country }) => {
	const [weatherData, setWeatherData] = useState(null);
	const langs = Object.keys(country.languages);
	const apiKey = process.env.REACT_APP_API_KEY;
	const capital = country.capital[0];

	const weatherAPI = () => {
		const queryCapital = capital.replaceAll(" ", "%20");
		const query = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryCapital}`;
		axios.get(query).then((resp) => setWeatherData(resp.data));
	};

	useEffect(weatherAPI, [apiKey, capital]);

	return (
		<div>
			<h1>{country.name.official}</h1>
			<p>{capital}</p>
			<p>{country.area}</p>
			<h1>{country.flag}</h1>
			<h2>Languages</h2>
			<ul>
				{langs.map((k) => (
					<li key={k}>{country.languages[k]}</li>
				))}
			</ul>
			{weatherData == null ? (
				<div>No weather data</div>
			) : (
				<CapitalWeather capital={capital} weatherData={weatherData} />
			)}
		</div>
	);
};

export default CountryDetails;
