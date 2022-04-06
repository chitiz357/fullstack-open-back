import { Note } from './model';

let notesList: Note[] = [
	{
		id: 1,
		tittle: 'primera nota',
		content: 'typescript es genial',
		important: true,
		date: new Date(),
	},
	{
		id: 2,
		tittle: 'segunda nota',
		content: 'me quiero pasa a apple pero no tengo dinero',
		important: false,
		date: new Date(),
	},
	{
		id: 3,
		tittle: 'tercera note',
		content: 'Mi cama es muy comoda🤤',
		important: true,
		date: new Date(),
	},
];
/** return all notes of the noteList */
export const allNotes = () => notesList;

/** return ony one notes of the noteList */
export const oneNote = (id: number) => {
	const note = notesList.find((note) => note.id === id);
	return note;
};
// ---------------------------------------------------------------------------|-80------------------------------------|-120---------------|-140a
/** add a note to noteList */
export const addNote = (note: Note) => {
	notesList.push(note);
};

/** create new note */
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

/** function to remove a note of de list */
export const removeNote = (id: number) => {
	notesList = notesList.filter((note) => !(note.id === id));
};
