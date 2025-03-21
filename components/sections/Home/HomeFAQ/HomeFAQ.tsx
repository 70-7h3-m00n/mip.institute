import stls from './HomeFAQ.module.sass'
import Wrapper from '@/ui/Wrapper'

const HomeFAQ = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Часто задаваемые вопросы</h2>
      </Wrapper>
    </section>
  )
}

export default HomeFAQ
