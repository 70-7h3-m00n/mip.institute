import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { updatePromocode } from '@/lib/promo';


export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const marketing_in = getCookie('marketing_in', { req: request });
  if (!marketing_in) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const promocode = await updatePromocode(Number(params.id), data, marketing_in as string);
    return NextResponse.json(promocode);
  } catch (error) {
    // console.error('Error updating promocode:', error.response);
    return NextResponse.json({ error: 'Failed to update promocode' }, { status: 500 });
  }
}