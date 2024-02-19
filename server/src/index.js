import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/connect.js";
import route from "./routers/rout.js";
import cors from "cors";
dotenv.config()
const app = express();
const port = process.env.PORT;

const runServer = async () => {
    await connectdb(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log("You Are Running On Port No:", port);
    })
}

app.use(cors());
app.use(express.json());
app.use(route)
runServer()
