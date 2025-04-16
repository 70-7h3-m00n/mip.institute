'use client'
import stls from './HomeForm.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'
import photo1 from '@/public/assets/imgs/groupSupervision/Form/photo1.png'
import photo2 from '@/public/assets/imgs/groupSupervision/Form/photo2.png'
import photo3 from '@/public/assets/imgs/groupSupervision/Form/photo3.png'
import photo4 from '@/public/assets/imgs/groupSupervision/Form/photo4.png'
import photo5 from '@/public/assets/imgs/groupSupervision/Form/photo5.png'
import background from '@/public/assets/imgs/groupSupervision/Form/backgroundForm.png'
import HomeFormPayment from './HomeFormPayment'
import Wrapper from '@/ui/Wrapper'

const HomeForm = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const imageContainer = [photo1, photo2, photo3, photo4, photo5]
  const backgroundPosition = isMobileAndTabletLayout ? '-20% -100%' : '-20% -68%'

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.columns}>
          <div
            className={classNames(stls.textBlock, stls.column)}
            style={{
              backgroundImage: `url(${background.src})`,
              objectFit: 'cover',
              backgroundSize: `${isMobileAndTabletLayout ? '400px' : '650px'}`,
              backgroundPosition: backgroundPosition,
              backgroundRepeat: 'no-repeat'
            }}>
            <div className={stls.header}>
              <h2 className={stls.title}>
                Подберем программу {isMobileAndTabletLayout && <br />} под ваш запрос
              </h2>
              <p className={stls.text}>
                <span className={stls.bold}>Оставьте заявку </span>на консультацию менеджеру
                приемной комиссии
              </p>
            </div>
            <div className={stls.images}>
              {imageContainer.map((el, idx) => (
                <div key={`${el}-${idx}`} className={stls.imageBlock}>
                  <Image
                    src={el.src}
                    width={isMobileAndTabletLayout ? 69 : 87}
                    height={isMobileAndTabletLayout ? 69 : 87}
                    alt='Фото'
                    className={stls.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classNames(stls.formBlock, stls.column)}>
            <HomeFormPayment />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HomeForm
