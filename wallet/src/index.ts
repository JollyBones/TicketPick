import express from "express";

const app = express();
const PORT = process.env.WALLET_PORT || 8801;

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