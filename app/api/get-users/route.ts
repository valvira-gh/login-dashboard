import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const users = await sql`SELECT * FROM Users;`;
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 200 });
    }
}