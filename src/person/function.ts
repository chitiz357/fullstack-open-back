import { Person } from "./model";

export function allPerson(): Person[] {
	return personList;
}

export function onePerson(id: number): Person | undefined {
	return personList.find((p) => p.id === id);
}

export function create({
	name,
	number,
}: {
	name: string;
	number: string;
}): Person {
	return {
		name,
		number,
		id: Math.floor(Math.random() * (100 - 1) + 1),
	};
}

export function addPerson(person: Person): void {
	personList.push(person);
}

export function removePerson(id: number): void {
	personList = personList.filter((p) => p.id !== id);
}

export let personList: Person[] = [
	{
		name: "bryan",
		number: "323",
		id: 1,
	},
	{
		name: "charlie",
		number: "2346",
		id: 2,
	},
	{ name: "lillith", number: "3243", id: 3 },
	{ name: "dorian", number: "098900", id: 4 },
];

export function totalPerson() {
	const total: number = personList.length;

	return total;
}
