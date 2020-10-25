import { Pool } from "pg";

interface Healthcheck {
    status: "pass" | "fail";
    serverTime?: string;
}

export const healthCheck = async (db: Pool): Promise<Healthcheck> => {
    const res = await db.query(`SELECT NOW() as time FROM wallet.event LIMIT 1`);
    console.log(res.rows);
    if (res.rows.length > 0) {
        return {
            status: "pass",
            serverTime: res.rows[0].time
        };
    }
    return {
        status: "fail"
    };
}