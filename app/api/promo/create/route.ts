import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { createPromocode } from '@/lib/promo';

export async function POST(request: Request) {
  const marketing_in = getCookie('marketing_in', { req: request });
  if (!marketing_in) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const promocode = await createPromocode(data, marketing_in as string);
    return NextResponse.json(promocode, { status: 201 });
  } catch (error) {
    console.error('Error creating promocode:', error);
    return NextResponse.json({ error: 'Failed to create promocode' }, { status: 500 });
  }
}