import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
} from 'kysely';

export interface Database {
    person: PersonTable;
}

export interface PersonTable {
    id: ColumnType<number>;
    name: ColumnType<string>;
    age: ColumnType<number>;
}

export type Person = Selectable<PersonTable>;
export type NewPerson = Insertable<PersonTable>;
