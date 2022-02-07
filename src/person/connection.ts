import { Request, Response } from "express";
import { addPerson, allPerson, onePerson } from "./function";
import { Person } from "./model";

export function getAllPerson(_req: Request, res: Response) {
	const personList = allPerson();
	res.send(personList);
}

export function getOnePerson(req: Request, res: Response) {
	const id = Number(req.params.id);
	const note = onePerson(id);
	res.send(note);
}

export function postPerson(req: Request, _res: Response) {
	const name: string = req.body.name;
	const number: string = req.body.number;

	const person = new Person({ name, number });

	addPerson(person);

	_res.send(person);
}
