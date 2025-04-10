import styles from './BuildYourBrandWho.module.sass'
import Image from 'next/image'
import { suitableForContent } from './consts'
import classNames from 'classnames'

const BuildYourBrandWho = () => {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Кому подойдет</h2>
      </div>
      <ul className={styles.list}>
        {suitableForContent.map((el, index) => (
          <li key={index} className={styles.item}>
            {/* <div className={styles.imageWrapper}> */}
            <Image src={el.image} className={styles.img} alt='Категория' width={350} height={350} />
            {/* <p className={classNames(styles.titleText, { [styles.black]: index === 1 })}>
                {el.title}
              </p> */}
            {/* </div> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BuildYourBrandWho
