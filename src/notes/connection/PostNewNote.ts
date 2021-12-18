import { Request, Response } from "express";
import addNote from "../function/addNote";
import newNote from "../function/newNote";

const postNewNote = (req: Request, res: Response) => {
	const body = req.body;

	const tittle: string = body.tittle;
	const content: string = body.content;
	const note = newNote(tittle, content);
	addNote(note);
	res.send(note);
};
export default postNewNote;
