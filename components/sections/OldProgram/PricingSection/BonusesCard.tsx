import Image from 'next/image'
import stls from './BonusesCard.module.sass'

const bonusesTags = ['мотивация', 'успех', 'опыт', 'рост', 'навыки', 'развитие']

const BonusesCard = ({ bonuses }) => {
  return (
    <div className={stls.card}>
      <div>
        <div className={stls.containerTitle}>
          <p className={stls.title}>{bonuses.title}</p>
          <p className={stls.subtitle}>{bonuses.subtitle}</p>
          <div className={stls.tags}>
            <span className={`${stls.tag} ${stls.hashTag}`}>#</span>
            {bonusesTags.map((tag, i) => (
              <span className={stls.tag} key={i}>
                {tag}
              </span>
            ))}
            <span className={`${stls.tag} ${stls.hashTag}`}>#</span>
          </div>
        </div>

        <ul className={stls.list}>
          {bonuses.items
            ?.split('\n')
            ?.filter(line => line.trim() !== '')
            .map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className={stls.imageWrapper}>
        <Image
          src='/assets/imgs/oldProgram/imgBonuses.png'
          alt='Бонусы'
          width={368}
          height={165}
          className={stls.image}
        />
      </div>
    </div>
  )
}

export default BonusesCard
