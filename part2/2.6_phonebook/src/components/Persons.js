const Persons = ({ persons, deletePerson }) => {
	return (
		<div>
			{persons.map((person) => (
				<div key={person.id}>
					<span>
						{person.name} --- {person.number}
					</span>
					<button
						onClick={() => {
							const result = window.confirm(
								`Delete ${person.name}?`
							);
							if (result) deletePerson(person.id);
						}}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default Persons;
