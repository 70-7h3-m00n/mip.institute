import styles from './BuildYourBrandWho.module.sass'
import Image from 'next/image'
import { suitableForContent } from './consts'

const BuildYourBrandWho = () => {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Кому подойдет</h2>
      </div>
      <ul className={styles.list}>
        {suitableForContent.map((el, index) => (
          <li key={index} className={styles.item}>
            <Image src={el.image} className={styles.img} alt='Категория' width={350} height={350} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BuildYourBrandWho
