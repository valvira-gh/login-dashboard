import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const result =
            await sql`CREATE TABLE new_users ( id SERIAL PRIMARY KEY, name VARCHAR(255) unique, email VARCHAR(255) unique, password VARCHAR(255), isLogged BOOLEAN DEFAULT false )`;

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
