import stls from './Title.module.sass'
import Wrapper from '@/ui/Wrapper'
import SignUpButtons from './SignUpButtons'

const Title = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <h1>Московский Институт Психологии</h1>
          <p>
            МИП — это команда практикующих экспертов, отзывчивых кураторов и наставников, которые
            помогут вам воплотить мечту в реальность и обеспечат старт вашей успешной карьеры в
            сфере психологии
          </p>
          <SignUpButtons />
        </div>
        
      </Wrapper>
    </section>
  )
}

export default Title
