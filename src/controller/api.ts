import { Application } from "express";
import getAllNotes from "../notes/connection/getAllNotes";
import getOneNote from "../notes/connection/getOneNote";
import postNewNote from "../notes/connection/PostNewNote";
// import GetOneNote from "../notes/connection/getOneNote";

const entriPoints = (app: Application) => {
	app.post("/notes",postNewNote)
	app.get("/notes", getAllNotes);
	app.get("/notes/:id", getOneNote);
};
export default entriPoints;
