import PromoList from '@/components/pages/PromoList';
import { fetchPromocodes } from '@/lib/promo';
import Loading from '@/ui/Loader/Loader';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { isTokenExpired } from '@/lib/jwt';

export interface PromoCodeItems {
  id: number;
  name: string;
  promo_code: string;
  redirect_url: string;
  is_active: boolean;
}

export interface PromoCode {
  items: PromoCodeItems[];
  count: number;
  page: number;
  per_page: number;
}

const PromocodesPage = async () => {
  const cookieStore = cookies();
  const marketing_in = cookieStore.get('marketing_in')?.value || '';

  if (!marketing_in || isTokenExpired(marketing_in)) {
    redirect('/marketing');
  }

  const promocodes = await fetchPromocodes(marketing_in);

  return (
    <Suspense fallback={<Loading />}>
      <PromoList initPromocodes={promocodes} />
    </Suspense>
  );
};

export default PromocodesPage;