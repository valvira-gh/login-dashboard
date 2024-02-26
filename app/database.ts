import { createKysely } from "@vercel/postgres-kysely";
import { ColumnType } from "kysely";

interface Database {
    users: UserTable;
    log_history: LogHistoryTable;
}

interface UserTable {
    id: ColumnType<number>;
    name: ColumnType<string>;
    email: ColumnType<string>;
    password: ColumnType<string>;
    is_logged: ColumnType<boolean>;
    created_at: ColumnType<Date>;

}

interface LogHistoryTable {
    id: ColumnType<number>;
    user_id: ColumnType<number>;
    log_in: ColumnType<Date>;
    log_out: ColumnType<Date>;
    log_count: ColumnType<number>;
}

export const db = createKysely<Database>();
export { sql } from 'kysely';
