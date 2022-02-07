export class Person {
	name: string;
	number: string;
	id: number;
	constructor({ name, number }: { name: string; number: string; }) {
		this.name = name;
		this.number = number;
		this.id = Math.random();
	}
}
