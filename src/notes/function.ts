import { notesList } from "./notes-list";
import { Note } from "./model";

export const allNotes = () => notesList;

export const oneNote = (id: number) => {
	const note = notesList.find((note) => note.id === id);
	return note;
};

export const addNote = (note: Note) => {
	notesList.push(note);
};

export const newNote = (title: string, content: string, important = false) => {
	const note: Note = {
		tittle: title,
		content: content,
		id: Math.random(),
		important: important,
		date: new Date(),
	};
	return note;
};
