import { Request, Response } from "express";
import { totalPerson } from "../person/function";

export function apiInfo(_req: Request, res: Response) {
	res.send(`
	<p>Phonebook has info ${totalPerson()} people</P>
	<p>${new Date()}
	`)
}