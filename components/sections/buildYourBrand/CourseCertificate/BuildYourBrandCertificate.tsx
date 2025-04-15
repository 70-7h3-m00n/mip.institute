import stls from './BuildYourBrandCertificate.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { CldImage } from 'next-cloudinary'

const BuildYourBrandCertificate = () => {
  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section>
      <div
        className={stls.container}
        style={{
          backgroundImage: `url("/assets/imgs/practicalTraining/buildYourBrand/basics/BgBasics.png")`,
          objectFit: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className={stls.left}>
          <h2 className={stls.title}>Какой документ вы получаете?</h2>
          <p className={stls.text}>
            <span className={stls.bold}>Сертификат о прохождении </span>
            курса <br /> с указанием количества
            <br /> пройденных часов
          </p>
        </div>

        <div className={stls.right}>
          {isMobileAndTabletLayout ? (
            <CldImage
              alt='Сертификат'
              src='build_your_brand_certificate_aff066739e'
              width='500'
              height='500'
              className={stls.certificate}
              style={{
                width: '100%',
                height: 'auto'
              }}
              crop={{
                type: 'fit',
                source: true
              }}
            />
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <div className={classNameImages[index]} key={index}>
                <CldImage
                  alt='Сертификат'
                  src='build_your_brand_certificate_aff066739e'
                  width='500'
                  height='500'
                  className={stls.certificate}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                  crop={{
                    type: 'fit',
                    source: true
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default BuildYourBrandCertificate
