interface DBConfig {
    host: string;
    database: string;
    port: number;
    user: string;
    password: string;
    timeout?: number;
}

export const db: DBConfig = {
    host: process.env.POSTGRES_HOST || "db",
    database: process.env.POSTGRES_DATABASE  || "ticketpick",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    timeout: 10000
} as const;
