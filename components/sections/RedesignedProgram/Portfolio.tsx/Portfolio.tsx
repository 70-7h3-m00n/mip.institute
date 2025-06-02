import stls from './Portfolio.module.sass'
import ProfileCard from './ProfileCard'
import QualificationCard from './QualificationCard'
import SkillsCard from './SkillsCard'
import Wrapper from '@/ui/Wrapper'

const Portfolio = () => {
  return (
    <section className={stls.container} id='skills'>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.accent}>Ваше портфолио</span> <br className={stls.mobileBreak} />{' '}
          после обучения
        </h2>

        <div className={stls.grid}>
          <div className={stls.left}>
            <ProfileCard />
            <QualificationCard />
          </div>
          <div className={stls.right}>
            <SkillsCard />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Portfolio
