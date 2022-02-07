import { Person } from "./model";
import { personList } from "./personList";

export function allPerson(): Person[] {
	return personList;
}

export function onePerson(id: number): Person | undefined {
	return personList.find((p) => p.id === id);
}


export function addPerson(person: Person): void {
	personList.push(person);
}
