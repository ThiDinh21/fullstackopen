const CountryList = ({ countries, setShownCountry }) => {
	return (
		<div>
			{countries.map((c) => (
				<div key={c.name.common}>
					<span>{c.name.common}</span>
					<button onClick={() => setShownCountry(c)}>show</button>
				</div>
			))}
		</div>
	);
};

export default CountryList;
