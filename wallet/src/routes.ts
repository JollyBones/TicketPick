import { Router } from "express";
import { WalletReadDomain } from "./reader";


export const walletRoutes = (app: Router, domain: WalletReadDomain) => {

    app.get("/wallet", async (req, res) => {
        if (!req.query || !req.query.userId) {
            return res.sendStatus(400);
        }

        const { userId } = req.query;
        const user_id = Number(userId);
        const wallet = await domain.getWalletByUserId(user_id);

        if (!wallet) {
            return res.sendStatus(404);
        }

        return res.send(wallet);
    });

    app.get("/wallet/:walletId", async (req, res) => {
        const {walletId} = req.params;
        if (!walletId || isNaN(Number(walletId))) {
            return res.sendStatus(400);
        }

        const wallet = await domain.getWallet(Number(walletId));
        if (!wallet) {
            return res.sendStatus(404);
        }

        return res.send(wallet);
    });

    app.get("/events", async (req, res) => {
        await domain.populate();
        res.sendStatus(200);
    })
};