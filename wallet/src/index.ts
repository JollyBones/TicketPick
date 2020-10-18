import express from "express";
import { json } from "body-parser";
import compression  from "compression";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.WALLET_PORT || 8801;

app.use(json());
app.use(compression());
app.use(helmet());
app.use(cors());

app.get("/", async (req, res) => {
   res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log(err);
});

process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
});