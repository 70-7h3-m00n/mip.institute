import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import buildYourBrandProgram from './const'
import stls from './BuildYourBrandProgram.module.sass'

const BuildYourBrandProgram = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const renderLecture = (text: string) => {
    const parts = text.split('<br/>')
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index !== parts.length - 1 && <br />}
          </span>
        ))}
      </>
    )
  }

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        <span className={stls.coloredTitle}>Краткая программа </span>курса
      </h2>
      <div className={stls.blocks}>
        {buildYourBrandProgram.map((el, idx) => (
          <div className={stls.block} key={idx}>
            <div className={stls.top}>
              <span className={stls.number}>{String(el.number).padStart(2, '0')}</span>
              <p className={stls.subTitle}>{el.title}</p>
            </div>
            <ul className={stls.lectures}>
              {el.lectures.map((lecture, i) => (
                <li key={i} className={stls.lecture}>
                  {el.number !== 0 && (
                    <span className={stls.coloredLecture}>{`Лекция ${i + 1}.`}</span>
                  )}{' '}
                  {renderLecture(isMobileAndTabletLayout ? lecture.mobile : lecture.desktop)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BuildYourBrandProgram
