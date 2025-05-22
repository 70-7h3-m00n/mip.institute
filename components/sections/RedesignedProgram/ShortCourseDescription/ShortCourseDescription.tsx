import Wrapper from '@/ui/Wrapper'
import stls from './ShortCourseDescription.module.sass'
import { useState } from 'react'
import classNames from 'classnames'

const modules = [
  {
    name: 'Базовая часть',
    modules: [
      {
        moduleName: 'Введение в профессию',
        studyHours: 100,
        description:
          'краткоеописаниекр аткоеописан иекратко еописани екра тко еопи саниекратк оеописани екраткоеопис аниекрат коеописан иекраткое описани екратко еопис ание кр аткоео писаниекратко еописаниекрат коеопис аниткоеопис аниекраткоеописан иекр атк оеописаниек раткоеопис аниекрат коеопис аниекраткоеописани'
      },
      {
        moduleName: 'Общая психология',
        studyHours: 200,
        description:
          'краткоеописаниекр аткоеописан иекратко еописани екра тко еопи саниекратк оеописани екраткоеопис аниекрат коеописан иекраткое описани екратко еопис ание кр аткоео писаниекратко еописаниекрат коеопис аниткоеопис аниекраткоеописан иекр атк оеописаниек раткоеопис аниекрат коеопис аниекраткоеописани'
      },
      {
        moduleName: 'Психология личности',
        studyHours: 30,
        description:
          'краткоеописаниекр аткоеописан иекратко еописани екра тко еопи саниекратк оеописани екраткоеопис аниекрат коеописан иекраткое описани екратко еопис ание кр аткоео писаниекратко еописаниекрат коеопис аниткоеопис аниекраткоеописан иекр атк оеописаниек раткоеопис аниекрат коеопис аниекраткоеописани'
      },
      {
        moduleName: 'Психология развития и возрастная психология',
        studyHours: 350,
        description:
          'краткоеописаниекр аткоеописан иекратко еописани екра тко еопи саниекратк оеописани екраткоеопис аниекрат коеописан иекраткое описани екратко еопис ание кр аткоео писаниекратко еописаниекрат коеопис аниткоеопис аниекраткоеописан иекр атк оеописаниек раткоеопис аниекрат коеопис аниекраткоеописани'
      }
    ]
  },
  {
    name: 'Профильная часть',
    modules: [
      {
        moduleName: 'Введение в профессию',
        studyHours: 100,
        description:
          'краткоеописаниекр аткоеописан иекратко еописани екра тко еопи саниекратк оеописани екраткоеопис аниекрат коеописан иекраткое описани екратко еопис ание кр аткоео писаниекратко еописаниекрат коеопис аниткоеопис аниекраткоеописан иекр атк оеописаниек раткоеопис аниекрат коеопис аниекраткоеописани'
      }
    ]
  },
  {
    name: 'Итоговая аттестация'
  }
]

const ShortCourseDescription = () => {
  const [openModule, setOpenModule] = useState<number | null>(0)

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index)
  }

  return (
    <section className={stls.container} id='curriculum'>
      <Wrapper>
        <h2>Краткая программа курса</h2>

        <div>
          {modules.map((item, index) => (
            <>
              <button
                key={item.name}
                onClick={() => toggleModule(index)}
                className={stls.accordionItem}>
                <span className={stls.accordionTitle}>{item.name}</span>

                {item.modules?.length && (
                  <div className={stls.hoursAndIcon}>
                    <span
                      className={classNames({
                        [stls.hours]: true,
                        [stls.extraMargin]: !item.modules?.length
                      })}>
                      {item?.modules?.reduce((acc, el) => {
                        return acc + el.studyHours
                      }, 0)}{' '}
                      часов
                    </span>
                    <span className={stls.icon}>
                      {openModule === index ? <IconMinus /> : <IconPlus />}
                    </span>
                  </div>
                )}
              </button>

              {item.modules?.length && (
                <ul
                  id={`accordion-content-${index}`}
                  className={classNames(stls.contentWrapper, {
                    [stls.open]: openModule === index
                  })}>
                  {item.modules.map((el, idx) => (
                    <li key={el.moduleName} className={stls.listItem}>
                      <div className={stls.text}>
                        <div className={stls.header}>
                          <p>
                            <span>Модуль {idx + 1}. </span>
                            <span>{el.moduleName}</span>
                          </p>
                          {el.studyHours && <p className={stls.hours}>{el.studyHours} часов</p>}
                        </div>
                        <p className={stls.description}>{el.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ShortCourseDescription

function IconPlus() {
  return (
    <span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'>
        <path
          d='M18 12H12M12 12H6M12 12V6M12 12V18'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

function IconMinus() {
  return (
    <span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'>
        <path
          d='M5 12H19'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}
