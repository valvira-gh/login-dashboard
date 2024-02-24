import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const GET = async (request: Request) => {
    try {
        const result =
            await sql`CREATE TABLE Users ( id SERIAL PRIMARY KEY, name VARCHAR(255) unique, email VARCHAR(255) unique, password VARCHAR(255) )`;

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export default GET;