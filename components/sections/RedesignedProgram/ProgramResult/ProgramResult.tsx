import Wrapper from '@/ui/Wrapper'
import stls from './ProgramResult.module.sass'
import { useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { programResultCards } from 'constants/redesignedProgram/programResult'

export default function ProgramResult() {
  const [allVisible, setAllVisible] = useState(false)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleClick = () => {
    setAllVisible(!allVisible)
  }

  const sliceEnd = isMobileAndTabletLayout ? 3 : 6

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <span>
            <IconStars />
          </span>
          <h2>В результате {isMobileAndTabletLayout && <br />} обучения вы сможете:</h2>
        </div>
        <div className={stls.blocks}>
          {programResultCards.slice(0, allVisible ? 9 : sliceEnd).map(item => (
            <li className={stls.card} key={item.id}>
              <span className={stls.icon}>
                <svg
                  width='13'
                  height='23'
                  viewBox='0 0 13 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10.1364 0L0 12.9091H4.67573L2.86364 23L13 10.0909H8.32427L10.1364 0Z'
                    fill='#855EDF'
                  />
                </svg>
              </span>
              <p className={stls.text}>{item.text}</p>
            </li>
          ))}
        </div>
        <div className={stls.buttonContainer}>
          <button onClick={handleClick} className={stls.btn}>
            {allVisible ? 'Показать меньше' : 'Смотреть все'}
          </button>
        </div>
      </Wrapper>
    </section>
  )
}

const IconStars = () => {
  return (
    <span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'>
        <rect width='50' height='50' rx='25' fill='#FF9357' />
        <path
          d='M34.28 33.1038C26.6217 34.8953 25.31 38.4393 23.6255 42.9909C20.2723 35.1307 20.2357 35.65 13.3368 32.2619C24.0091 27.368 18.9112 26.5454 25.7229 20.4033C23.2129 23.6917 28.0584 31.0134 34.28 33.1038Z'
          fill='white'
        />
        <path
          d='M39.8743 17.9844C35.9646 18.899 35.295 20.7084 34.435 23.032C32.7231 19.0192 32.7044 19.2844 29.1824 17.5546C34.6308 15.0562 32.0282 14.6362 35.5058 11.5006C34.2244 13.1794 36.6981 16.9172 39.8743 17.9844Z'
          fill='white'
        />
        <path
          d='M18.8369 13.3974C16.4868 13.9472 16.0843 15.0347 15.5674 16.4314C14.5384 14.0194 14.5271 14.1788 12.4101 13.1391C15.6851 11.6373 14.1207 11.3849 16.211 9.50005C15.4407 10.5091 16.9277 12.7559 18.8369 13.3974Z'
          fill='white'
        />
      </svg>
    </span>
  )
}
