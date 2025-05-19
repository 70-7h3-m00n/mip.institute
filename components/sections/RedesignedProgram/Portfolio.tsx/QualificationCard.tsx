import stls from './QualificationCard.module.sass'
import Image from 'next/image'

const QualificationCard = () => (
  <div className={stls.qualification}>
    <div className={stls.stage}>
      <div className={stls.title}>
        <span className={stls.circle}>1</span>
        <span className={stls.label}>Квалификация:</span>
      </div>
      <span className={stls.text}>
        Профессиональная переподготовка по психологическому консультированию, диплом Московского
        Института Психологии
      </span>
    </div>

    <div className={stls.stage}>
      <div className={stls.title}>
        <span className={stls.circle}>2</span>
        <span className={stls.label}>Диплом:</span>
      </div>
      <div className={stls.imageWrapper}>
        <Image
          src='/assets/imgs/redesignedProgram/Portfolio/diplom.png'
          alt='Диплом'
          width={260}
          height={184}
        />
      </div>
    </div>
  </div>
)

export default QualificationCard
