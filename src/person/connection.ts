import { Request, Response } from "express";
import * as fn from "./function";

export function getAll(_req: Request, res: Response) {
	const personList = fn.allPerson();
	res.send(personList);
}

export function getOne(req: Request, res: Response) {
	const id = Number(req.params.id);
	const note = fn.onePerson(id);
	if (!note) {
		res.status(404).send({ error: `no encontrado` }).end();
		return;
	}

	res.send(note);
}

export function post(req: Request, res: Response) {
	const body = req.body;

	if (!body.name) {
		res.status(400).send("name is missing");
		return;
	}
	if (!body.number) {
		res.status(400).send("number is missing");
		return;
	}

	const personProps = {
		name: body.name,
		number: body.number,
	};

	const person = fn.create(personProps);

	fn.addPerson(person);

	res.send(person);
}

export function del(req: Request, res: Response) {
	const id: number = Number(req.params.id);
	fn.removePerson(id);
	res.status(204).end();
}
