import Wrapper from '@/ui/Wrapper'
import PopupTrigger from '@/ui/PopupTrigger'
import classNames from 'classnames'
import Image from 'next/image'
import card1 from '@/public/assets/imgs/redesignedProgram/ProgramHero/card-hours.png'
import card2 from '@/public/assets/imgs/redesignedProgram/ProgramHero/card-forma.png'
import stls from './ProgramHero.module.sass'
import ProgramHeroSwiper from '@/components/sections/RedesignedProgram/ProgramHero/ProgramHeroSwiper/ProgramHeroSwiper'

const ProgramHero = () => {
  return (
    <>
      <section className={stls.container}>
        <Wrapper>
          <div className={stls.tags}>
            <span className={classNames({ [stls.tag]: true, [stls.updated]: true })}>
              Обновлено в 2025 году
            </span>
            <span className={stls.tag}>Срок обучения: 12 месяцев</span>
            <span className={stls.tag}>Старт обучения: 1 сентября</span>
          </div>

          <div className={stls.content}>
            <div className={stls.text}>
              <h1>Психологическое консультирование</h1>
              <p className={stls.subtitle}>
                Курс обучения «Психологическое консультирование» позволит получить востребованную
                профессию с нуля за 12 месяцев и начать консультировать сразу после обучения
              </p>

              <div className={stls.btns}>
                <PopupTrigger btn='alpha' cta='signUp' />
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>

            <div className={stls.images}>
              <span className={stls.hoursText}>1500 академических часов</span>
              <Image
                src={card1}
                alt='Часы учебы'
                width={270}
                height={285}
                className={stls.imgHours}
              />
              <span className={stls.formText}>Заочная форма обучения</span>
              <Image src={card2} alt='afaf' width={270} height={285} className={stls.imgForm} />
            </div>
          </div>
        </Wrapper>
      </section>
      <ProgramHeroSwiper hours={1500} />
    </>
  )
}

export default ProgramHero
