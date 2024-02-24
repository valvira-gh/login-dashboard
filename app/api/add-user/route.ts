import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = 'test-user'
    const email = 'test@test.com'
    const password = 'salasana123';

    try {
        if (!name || !email || !password) throw new Error('Missing required fields');
        await sql`INSERT INTO Users (name, email, password) VALUES (${name}, ${email}, ${password})`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const users = await sql`SELECT * FROM Users`;
    return NextResponse.json({ users }, { status: 200 });
}