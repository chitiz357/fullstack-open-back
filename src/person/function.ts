import { Person } from "./model";
import { personList } from "./personList";

export const allPerson = () => personList

export const onePerson = (id: number): Person | undefined =>
	personList.find((p) => p.id === id);


