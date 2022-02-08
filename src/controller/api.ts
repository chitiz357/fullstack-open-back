import { Application } from "express";
import { apiInfo } from "../info/connection";
import {getAllNotes, postNote , getOneNote} from '../notes/connection';
import * as person from '../person/connection';

const entriPoints = (app: Application) => {

	app.get("/info",apiInfo)

	app.get("/api/person", person.getAll);
	app.get("/api/person/:id", person.getOne);
	app.post("/api/person", person.post);
	app.delete("/api/person/:id", person.del)

	app.post("/api/notes", postNote);
	app.get("/api/notes", getAllNotes);
	app.get("/api/notes/:id", getOneNote);
};
export default entriPoints;
