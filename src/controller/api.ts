import { Application } from "express";
import {getAllNotes, postNote , getOneNote} from '../notes/connection';
import {getAllPerson ,getOnePerson} from '../person/connection';

const entriPoints = (app: Application) => {
	app.get("/api/person", getAllPerson);
	app.get("/api/person/:id",getOnePerson);

	app.post("/api/notes", postNote);
	app.get("/api/notes", getAllNotes);
	app.get("/api/notes/:id", getOneNote);
};
export default entriPoints;
