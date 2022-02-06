import { Request, Response } from "express";
import * as fn from "./function";

export const getAllNotes = (_req: Request, res: Response) => {
	const notes = fn.allNotes();

	res.send(notes);
};

export const getOneNote = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const note = fn.oneNote(id);

	res.send(note);
};

export const postNote = (req: Request, res: Response) => {
	const body = req.body;

	const title = body.title;
	const content = body.content;
	const note = fn.newNote(title, content);
	fn.addNote(note);
	res.send(note);
};
