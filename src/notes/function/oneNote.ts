// import { note } from "../model/note";
import { notesList } from "../notes-list";

function oneNote(id: number) {
	const note = notesList.find((note) => note.id == id);
	return note
}

export default oneNote;
