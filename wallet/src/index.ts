import express from "express";

const app = express();
const PORT = process.env.WALLET_PORT || 8801;

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
