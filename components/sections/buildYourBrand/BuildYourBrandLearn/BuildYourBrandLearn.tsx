import stls from './BuildYourBrandLearn.module.sass'
import whyInfo from './const'

const BuildYourBrandLearn = () => {
  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        <span className={stls.coloredTitle}>Чему вы </span>
        <span className={stls.responsiveLine}>научитесь?</span>
      </h2>
      {whyInfo.map((el, idx) => (
        <div className={stls.block} key={idx}>
          <ul className={stls.list}>
            {el.list.map((el, idx) => (
              <li key={idx} className={stls.line}>
                <div className={stls.itemContent}>
                  <span className={stls.icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='27'
                      viewBox='0 0 16 27'
                      fill='none'>
                      <path
                        d='M11.8099 0L0 15.1542H5.4477L3.33643 27L15.1463 11.8458H9.69864L11.8099 0Z'
                        fill='#F87E1B'
                      />
                    </svg>
                  </span>
                  <p className={stls.text}>{el}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default BuildYourBrandLearn
