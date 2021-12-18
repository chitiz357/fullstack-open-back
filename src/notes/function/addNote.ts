import { notesList } from "../notes-list";
import { note } from "../model/note";
const addNote = (note: note) => {
	notesList.push(note);
};

export default addNote
