import { Pool } from "pg";
import { Wallet, getPool } from "../db";

interface WalletReadDomain {
    getWallet: (id: number) => Promise<Wallet | null>,
    getWalletByUserId: (user_id: number) => Promise<Wallet>
};


export const WalletDomain = (db: Pool = getPool()): WalletReadDomain => {
    return {
        getWallet: async (id) => {
            const res = await db.query(`SELECT * FROM wallet WHERE id = $1`, [id]);
            return res.rows.length > 0 ? res.rows[0] : null;
        },
        getWalletByUserId: async (user_id) => {
            const res = await db.query(`SELECT * from wallet WHERE user_id = $1`, [user_id]);
            return res.rows.length > 0 ? res.rows[0] : null;
        }
    };
}