import { NextResponse } from 'next/server';
import { getPromocodes } from '@/lib/promo';

export async function GET(request: Request) {
  const username = process.env.API_USERNAME || ''
  const password = process.env.API_PASSWORD || ''
  try {
    const promocode = await getPromocodes({username, password});
    return NextResponse.json(promocode, { status: 201 });
  } catch (error) {
    console.error('Error creating promocode:', error);
    return NextResponse.json({ error: 'Failed to create promocode' }, { status: 500 });
  }
}