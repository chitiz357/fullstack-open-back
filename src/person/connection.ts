import { Request, Response } from "express";
import { allPerson, onePerson } from "./function";

export const getAllPerson = (_req: Request, res: Response) => {
	const personList = allPerson();
	res.send(personList);
};

export const getOnePerson = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const note = onePerson(id);
	res.send(note);
};
