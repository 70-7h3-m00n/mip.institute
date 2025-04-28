import stls from './AboutInstituteBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import IconSpiral from '@/components/icons/IconSpiral'
import IconMiniSpiral from './IconMiniSpiral'

const AboutInstituteBlock = () => {
  return (
    <section className={stls.fon}>
      <Wrapper>
        <div className={stls.bg}>
          <div className={stls.infoContainer}>
            <div className={stls.textBlock}>
              <h1>Московский институт психологии</h1>
              <ul className={stls.redDot}>
                <li>
                  Наш институт объединяет традиции классического образования{' '}
                  <br className={stls.lineBreak} />и современные методики, создавая среду для
                  интеллектуального, творческого и профессионального роста.
                </li>
                <li>
                  Мы заботимся о том, чтобы обучение было комфортным{' '}
                  <br className={stls.lineBreak} />и полезным. В наших программах профессиональной{' '}
                  <br className={stls.lineBreak} />
                  переподготовки, повышения квалификации, краткосрочные{' '}
                  <br className={stls.lineBreak} />
                  курсы и образовательные мероприятия — всё, что нужно{' '}
                  <br className={stls.lineBreak} />
                  для уверенного роста в профессии: актуальные знания,{' '}
                  <br className={stls.lineBreak} />
                  практика и поддержка на каждом этапе.
                </li>
              </ul>
            </div>
          </div>

          <div className={stls.photoContainer}>
            <div className={stls.imageWrapper}>
              <Image
                alt='Фото студентов'
                width={362}
                height={368}
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739277885/Postuplenie_Right_50fc0217ef.jpg'
                className={stls.image}
              />
              <div className={stls.figure}></div>
              <div className={stls.round}></div>
              <div className={stls.spiralContainer}>
                <IconSpiral />
              </div>
              <div className={stls.smallSpiral}>
                <IconMiniSpiral />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutInstituteBlock
