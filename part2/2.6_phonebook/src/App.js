import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const onChangeName = (event) => {
		setNewName(event.target.value);
	};

	const onChangeNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const onSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const hook = () => {
		axios
			.get("http://localhost:3001/persons")
			.then((resp) => setPersons(resp.data));
	};

	useEffect(hook, []);

	const onSubmit = (event) => {
		event.preventDefault();
		if (persons.findIndex((person) => person.name === newName) !== -1) {
			window.alert(`${newName} is already existed`);
			return;
		}
		const newPerson = {
			id: persons.length,
			name: newName,
			number: newNumber,
		};
		setPersons(persons.concat(newPerson));
		setNewName("");
		setNewNumber("");
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter searchTerm={searchTerm} onChange={onSearchChange} />
			<h2>Add new</h2>
			<PersonForm
				onSubmit={onSubmit}
				name={newName}
				number={newNumber}
				onChangeName={onChangeName}
				onChangeNumber={onChangeNumber}
			/>
			<h2>Numbers</h2>
			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
