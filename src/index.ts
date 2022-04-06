import express from "express";
import  { router } from "./controller/api";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
	res.send(`dasfas`);
});

app.use('/api',router)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Sever is running on port ${PORT}`);
});
