import express from "express";
import entriPoints from "./controller/api"; 
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (_req, res) => {
	res.send(`dasfas`);
});

entriPoints(app)

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Sever is running on port ${PORT}`);
});
