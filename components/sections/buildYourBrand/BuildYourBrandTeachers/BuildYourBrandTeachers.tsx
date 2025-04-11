import Image from 'next/image'
import stls from './BuildYourBrandTeachers.module.sass'
import supervisors from './const'
import placeholder from '@/public/assets/imgs/practicalTraining/buildYourBrand/teachers/GroupУчитель.png'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

const BuildYourBrandTeachers = () => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false)
  const placeholders = Array.from({ length: 2 })

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Преподаватели</h2>
      <ul className={stls.list}>
        {supervisors.map(supervisor => (
          <li className={stls.supervisor} key={supervisor.name}>
            <CldImage
              src={supervisor.image}
              alt={supervisor.name}
              className={stls.image}
              style={{ width: '100%', height: 'auto' }}
              width={370}
              height={360}
              crop='fit'
            />
            <p className={stls.name}>{supervisor.name}</p>
            <div className={stls.position}>
              <span>{isFullTextVisible ? supervisor.fullText : supervisor.hiddenText}</span>

              <button
                className={stls.readMoreBtn}
                onClick={() => setIsFullTextVisible(!isFullTextVisible)}>
                {isFullTextVisible ? 'Скрыть описание' : 'Читать далее'}
              </button>
            </div>
          </li>
        ))}

        {placeholders.map((_, idx) => (
          <li className={stls.emptyli} key={`placeholder-${idx}`}>
            <Image
              className={stls.empty}
              alt='placeholder'
              src={placeholder}
              width={370}
              height={680}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BuildYourBrandTeachers
