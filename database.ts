import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import 'dotenv/config'

const env = (key: string, defaultValue?: string) => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        throw new Error(`Environment variable ${key} is required`);
    }
    return value;
}

export const db = new Kysely({
    dialect: new PostgresDialect({
        pool: new Pool({
            database: env(`POSTGRES_DATABASE`),
            host: env(`POSTGRES_HOST`, `localhost`),
            user: env(`POSTGRES_USER`),
            password: env(`POSTGRES_PASSWORD`),
            port: parseInt(env(`POSTGRES_PORT`, `5432`)),
        })
    })
})

export { sql } from 'kysely';
