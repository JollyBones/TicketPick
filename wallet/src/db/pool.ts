import { Pool } from "pg";
import { db } from "./config"; 

const pool = new Pool({
    host: "localhost",
    user: db.user,
    password: db.password,
    port: db.port,
    connectionTimeoutMillis: db.timeout
});

export const getPool = () => pool;