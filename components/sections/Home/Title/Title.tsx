'use client'
import stls from './Title.module.sass'
import Wrapper from '@/ui/Wrapper'

const Title = ({all}) => {
  console.log(all);
  
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1>MIP</h1>
      </Wrapper>
    </section>
  )
}

export default Title
