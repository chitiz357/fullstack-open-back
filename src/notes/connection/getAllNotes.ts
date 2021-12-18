import { Request, Response } from 'express';
import { notesList } from '../notes-list';

const getAllNote = (_req:Request,res:Response) => {
	res.send(notesList)
}
export default getAllNote