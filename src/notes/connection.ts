import { Request, Response } from "express";
import * as fn from "./function";
import { Note } from "./model";

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

	const tittle:string = body.title;
	const content: string= body.content;
	const note = new Note({tittle,content});
	fn.addNote(note);
	res.send(note);
};
