import { Pool } from "pg";
import { Wallet, getPool, Events } from "../db";
import { Model } from "./model";

interface WalletModel {
    wallet_id: number;
    user_id: number;
    balance: number;
}

const model: Model<WalletModel> = new Model();

export interface WalletReadDomain {
    populate: () => Promise<void>,
    getWallet: (id: number) => Promise<Wallet | null>,
    getWalletByUserId: (user_id: number) => Promise<Wallet>
};


export const WalletDomain = (db: Pool = getPool()): WalletReadDomain => {
    return {
        populate: async () => {
            model.get(1);
            const res = await db.query<Events>(`SELECT * FROM wallet.event GROUP BY wallet_id, id ORDER BY wallet_id, version`);
            if (res.rows.length > 0) {
                console.log(res.rows);
            }
        },
        getWallet: async (id) => {
            const res = await db.query(`SELECT * FROM wallet.wallet WHERE id = $1`, [id]);
            return res.rows.length > 0 ? res.rows[0] : null;
        },
        getWalletByUserId: async (user_id) => {
            const res = await db.query(`SELECT * from wallet.wallet WHERE user_id = $1`, [user_id]);
            return res.rows.length > 0 ? res.rows[0] : null;
        }
    };
}