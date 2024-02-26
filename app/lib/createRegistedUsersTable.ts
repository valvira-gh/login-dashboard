import { db, sql } from '@/database'

export async function seed() {
    const createTable = await db.schema
        .createTable('registered_users')
        .ifNotExists()
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('name', 'varchar(55)', (col) => col.notNull().unique())
        .addColumn('password', 'varchar(255)', (col) => col.notNull())
        .addColumn('isLogged', 'boolean', (col) => col.notNull().defaultTo(false))
        .addColumn('created_at', sql`timestamp with time zone`, (col) =>
            col.defaultTo(sql`current_timestamp`))
        .execute()
    console.log(`Created 'registered_users' table: ${createTable}`)
}