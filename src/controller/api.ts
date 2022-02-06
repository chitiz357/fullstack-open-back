import { Application } from "express";
import getAllNotes from "../notes/connection/getAllNotes";
import getOneNote from "../notes/connection/getOneNote";
import postNewNote from "../notes/connection/PostNewNote";
import { getAllPerson } from "../person/connection/getAllPerson";
// import GetOneNote from "../notes/connection/getOneNote";

const entriPoints = (app: Application) => {
	app.get("/api/person", getAllPerson);

	app.post("/api/notes", postNewNote);
	app.get("/api/notes", getAllNotes);
	app.get("/api/notes/:id", getOneNote);
};
export default entriPoints;
