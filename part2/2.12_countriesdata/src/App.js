import "./App.css";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResult = ({ countries, shownCountry, setShownCountry }) => {
	if (shownCountry !== null) return <CountryDetails country={shownCountry} />;

	if (countries.length === 0) return <div></div>;

	if (countries.length === 1)
		return <CountryDetails country={countries[0]} />;

	if (countries.length <= 10)
		return (
			<CountryList
				countries={countries}
				setShownCountry={setShownCountry}
			/>
		);

	return <p>Too many matches, specify another filter</p>;
};

function App() {
	const [shownCountry, setShownCountry] = useState(null);
	const [countries, setCountries] = useState([]);
	const [query, setQuery] = useState("");

	const countriesAPI = () => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((resp) => setCountries(resp.data));
	};

	useEffect(countriesAPI, []);

	const onChange = (event) => {
		setQuery(event.target.value);
		setShownCountry(null);
	};

	const filteredCountries = countries.filter((country) =>
		country.name.common.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div>
			Find countries <input type="text" onChange={onChange} />
			{query === "" ? (
				<div></div>
			) : (
				<SearchResult
					countries={filteredCountries}
					shownCountry={shownCountry}
					setShownCountry={setShownCountry}
				/>
			)}
		</div>
	);
}

export default App;
