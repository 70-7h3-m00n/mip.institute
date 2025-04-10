import Image from 'next/image'
import stls from './BuildYourBrandTeachers.module.sass'
import supervisors from './const'
import placeholder from '@/public/assets/imgs/practicalTraining/buildYourBrand/teachers/GroupУчитель.png'

const BuildYourBrandTeachers = () => {
  const placeholders = Array.from({ length: 2 })
  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Преподаватели</h2>
      <ul className={stls.list}>
        {supervisors.map(supervisor => (
          <li className={stls.supervisor} key={supervisor.name}>
            <Image
              className={stls.image}
              src={supervisor.image}
              alt={supervisor.name}
              width={370}
              height={360}
            />
            <p className={stls.name}>{supervisor.name}</p>
            <span className={stls.position}>
              {supervisor.position}
              <a href={supervisor.link} className={stls.link}>
                {supervisor.linkText}
              </a>
            </span>
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
