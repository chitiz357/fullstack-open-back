import { note } from "./model/note";

export let notesList: note[] = [
	{
		id: 1,
		tittle: "primera nota",
		content: "typescript es genial",
		important: true,
		date: new Date(),
	},
	{
		id: 2,
		tittle: "segunda nota",
		content: "me quiero pasa a apple pero no tengo dinero",
		important: false,
		date: new Date(),
	},
	{
		id: 3,
		tittle: "tercera note",
		content: "Mi cama es muy comoda🤤",
		important: true,
		date: new Date(),
	},
];
