import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { togglePromocode } from '@/lib/promo';


export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const marketing_in = getCookie('marketing_in', { req: request });
  if (!marketing_in) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    
    await togglePromocode(Number(params.id), marketing_in as string);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating promocode:', error);
    return NextResponse.json({ error: 'Failed to update promocode' }, { status: 500 });
  }
}