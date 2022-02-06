import { Request, Response } from 'express';
import oneNote from '../../notes/function/oneNote';

const getOneNote = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const note = oneNote(id);
	res.send(note);
}
export default getOneNote
