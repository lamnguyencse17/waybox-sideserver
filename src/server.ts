import express from "express";
import mainRouter from "./routers/router";
import { initMongoose } from "./init";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;

initMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use("/", mainRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
