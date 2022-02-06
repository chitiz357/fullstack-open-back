import { personList } from "../personList";

const onePerson = (id: number): Person | undefined =>
	personList.find((p) => p.id === id);

export default onePerson;
