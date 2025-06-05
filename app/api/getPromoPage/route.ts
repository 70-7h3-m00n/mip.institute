// getPromoPage

import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { getPromoPage } from '@/lib/promo';

export async function GET(request: Request) {
  const marketing_in = getCookie('marketing_in', { req: request });
  if (!marketing_in) {
    return NextResponse.json({ error: 'Неавторизован' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const token = marketing_in as string;
  try {
    const promocode = await getPromoPage(page, token);
    return NextResponse.json(promocode, { status: 201 });
  } catch (error) {
    console.error('Error creating promocode:', error);
    return NextResponse.json({ error: 'Произошла непредвиденная ошибка' }, { status: 401 });
  }
}