import { Request, Response } from "express";
import oneNote from "../function/oneNote";

const GetOneNote = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const note = oneNote(id);
	if (!note) {
		res.status(404).send("error");
	}
	res.send(note);
};
export default GetOneNote;
