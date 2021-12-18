import express from "express";
import entriPoints from "./controller/api";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
	res.send(`dasfas`);
});

entriPoints(app)

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Sever is running on port ${PORT}`);
});
