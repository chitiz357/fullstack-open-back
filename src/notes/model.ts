export class Note {
	id: number;
	tittle: string;
	content: string;
	date: Date;
	important: boolean;

	constructor({ tittle, content, important = false }: NoteProps) {
		this.tittle = tittle;
		this.content = content;
		this.important = important;
		this.date = new Date();
		this.id = Math.random();
	}
}

interface NoteProps {
	tittle: string;
	content: string;
	important?: boolean;
}
