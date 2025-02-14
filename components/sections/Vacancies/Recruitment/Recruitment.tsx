import stls from './Recruitment.module.sass'
import Wrapper from '@/ui/Wrapper'
import RecruiterCard from '@/components/sections/Vacancies/HowBecomeaPart/RecruiterCard/RecruiterCard'
import { Recruiter } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

type Recruitment = {
  title: string
  recruiter: Recruiter[]
}

type Props = {
  props: Recruitment
}

const Recruitment = ({ props: { title, recruiter } }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <div className={stls.cards}>
          {recruiter?.map(recruiter => (
            <div className={stls.cardWithName} key={recruiter.id}>
              <RecruiterCard recruiter={recruiter} />
              <p className={stls.name}>{recruiter.name}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Recruitment
