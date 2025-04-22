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
          Мы — команда практикующих психологов, отзывчивых кураторов и внимательных наставников. Вместе с вами пройдём обучение на психолога: от первых шагов 
          <br className={stls.br}/>в теории до уверенных действий на практике
          </p>
          <SignUpButtons />
        </div>
      </Wrapper>
    </section>
  )
}

export default Title
