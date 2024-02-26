import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
} from 'kysely';

export interface Database {
    registered_users: RegisteredUsersTable;
    log_history: LogHistoryTable;
}

export interface RegisteredUsersTable {
    id: ColumnType<number>;
    name: ColumnType<string>;
    password: ColumnType<string>;
    isLogged: ColumnType<boolean>;
    createdAt: ColumnType<Date>;
    log_history: LogHistoryTable[];
}

export interface LogHistoryTable {
    id: ColumnType<number>;
    userId: ColumnType<number>;
    logIn: ColumnType<Date>;
    logOut: ColumnType<Date>;
    logCount: ColumnType<number>;
}

export interface PersonTable {
    id: ColumnType<number>;
    name: ColumnType<string>;
    age: ColumnType<number>;
}



export type Person = Selectable<PersonTable>;
export type NewPerson = Insertable<PersonTable>;
