// import { db, sql } from '@/app/lib/kysely';

// export const seed = async () => {
//     const createTable = await db.schema
//         .createTable('kysely_users')
//         .ifNotExists()
//         .addColumn('id', 'serial', (column) => column.primaryKey())
//         .addColumn('name', 'varchar(255)', (column) => column.notNull())
//         .addColumn('email', 'varchar(255)', (column) => column.notNull().unique())
//         .addColumn('password', 'varchar(255)', (column) => column.notNull().unique())

//         .execute()
//     console.log(`Created 'users' table: ${createTable}`)

//     const addUsers = await db
// }