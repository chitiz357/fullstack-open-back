import { note } from "../model/note";

const newNote = (tittle: string, content: string, important = false): note => {
	const note: note = {
		tittle: tittle,
		content: content,
		id: Math.random(),
		date: new Date(),
		important: important,
	};
	return note
};

export default newNote
