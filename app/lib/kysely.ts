import { createKysely } from "@vercel/postgres-kysely";
import { Generated } from "kysely";

interface UserTable {
    id: Generated<number>;
    name: string;
    email: string;
    password: string;
}

export interface Database {
    users: UserTable;
}

export const db = createKysely<Database>();
export { sql } from 'kysely';