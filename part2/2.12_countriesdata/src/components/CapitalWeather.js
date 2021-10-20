import React from "react";

export default function CapitalWeather({ capital, weatherData }) {
	const data = weatherData.current;

	return (
		<div>
			<h2>Weather in {capital}</h2>
			<p>
				<b>Temerature</b>: {data.temperature} Celcius
			</p>
			<img src={data.weather_icons[0]} alt="Weather icon" />
			<p>
				<b>Wind:</b> {data.wind_speed} mph direction {data.wind_dir}
			</p>
		</div>
	);
}
