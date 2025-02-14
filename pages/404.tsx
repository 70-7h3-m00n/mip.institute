import BtnAlpha from '@/components/btns/BtnAlpha'
import Wrapper from '@/ui/Wrapper'
import pic from '@/public/assets/imgs/general/404page.png'
import stls from '@/styles/pages/404.module.sass'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

export default function NotFound() {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <div className={stls.bg}>
      <NextSeo nofollow={true} noindex={true} />
      <Wrapper>
        <div className={stls.image}>
          <Image src={pic} alt='Страница не найдена' height={isMobileAndTabletLayout ? 300 : 500} />
        </div>
        <div className={stls.errorText}>
          <div className={stls.message}>
            <p className={stls.notFound}>К сожалению, страница не найдена</p>
            <BtnAlpha href={'/'} text='Вернуться на главную' />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
