import stls from './BuildYourBrandForm.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'
import photo1 from '@/public/assets/imgs/groupSupervision/Form/photo1.png'
import photo2 from '@/public/assets/imgs/groupSupervision/Form/photo2.png'
import photo3 from '@/public/assets/imgs/groupSupervision/Form/photo3.png'
import photo4 from '@/public/assets/imgs/groupSupervision/Form/photo4.png'
import photo5 from '@/public/assets/imgs/groupSupervision/Form/photo5.png'
// import background from '@/public/assets/imgs/groupSupervision/Form/backgroundForm.png'
import BuildYourBrandPaymentForm from './BuildYourBrandPaymentForm'

const BuildYourBrandForm = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const imageContainer = [photo1, photo2, photo3, photo4, photo5]
  const backgroundPosition = isMobileAndTabletLayout ? '-33% -68%' : '-74% -319%'

  return (
    <section className={stls.container}>
      <div className={stls.columns}>
        <div
          className={classNames(stls.textBlock, stls.column)}
          style={{
            // backgroundImage: `url(${background.src})`,
            objectFit: 'cover',
            backgroundSize: `${isMobileAndTabletLayout ? '400px' : '650px'}`,
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat'
          }}>
          <div className={stls.header}>
            <p className={stls.title}>
              Подберем программу {isMobileAndTabletLayout && <br />} под ваш запрос
            </p>
            <p className={stls.text}>
              <span className={stls.bold}>Оставьте заявку </span>на консультацию менеджеру приемной
              комиссии
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
          <BuildYourBrandPaymentForm />
        </div>
      </div>
    </section>
  )
}

export default BuildYourBrandForm
