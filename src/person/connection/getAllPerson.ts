import { Request, Response } from 'express';
import { personList } from '../personList';

export function getAllPerson(_req: Request, res: Response) {
	res.send(personList)
}

