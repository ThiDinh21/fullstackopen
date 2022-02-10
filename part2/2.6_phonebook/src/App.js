import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [msg, setMsg] = useState(null);
	const [err, setErr] = useState(null);

	const onChangeName = (event) => {
		setNewName(event.target.value);
	};

	const onChangeNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const onSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const fetchAll = () => {
		phonebookService.getAll().then((data) => setPersons(data));
	};

	useEffect(fetchAll, []);

	const onSubmit = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		if (persons.findIndex((person) => person.name === newName) !== -1) {
			const res = window.confirm(
				`${newName} is already existed, update?`
			);
			const id = persons.find((p) => p.name === newName).id;
			if (res) {
				updatePerson(id, newPerson);
			}
		} else {
			phonebookService
				.create(newPerson)
				.then((data) => {
					setPersons(persons.concat(data));
					setMsg(`Added ${newName}`);
				})
				.catch((error) => {
					setErr(error.response.data.error);
					setTimeout(() => setErr(null), 5000);
				});
		}

		setNewName("");
		setNewNumber("");
		setTimeout(() => setMsg(null), 5000);
	};

	const updatePerson = (id, newObj) => {
		phonebookService
			.update(id, newObj)
			.then((data) => {
				setPersons(persons.map((p) => (p.id === id ? data : p)));
				setMsg(`Updated ${newName}`);
			})
			.catch((err) => {
				setErr(`Info of ${newObj.name} had been removed from db`);
				setTimeout(() => setErr(null), 5000);
			});
	};

	const deletePerson = (id) => {
		phonebookService.del(id).then(() => {
			phonebookService.getAll().then((data) => {
				setPersons(data);
			});
		});
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>
			{msg == null ? null : <p className="msg">{msg}</p>}
			{err == null ? null : <p className="error">{err}</p>}

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
			<Persons persons={filteredPersons} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
