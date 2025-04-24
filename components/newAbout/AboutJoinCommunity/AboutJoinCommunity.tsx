import stls from './AboutJoinCommunity.module.sass'
import JoinCommunity from '@/components/sections/lectorium/Stub/JoinCommunity/JoinCommunity'
import Wrapper from '@/ui/Wrapper'

const AboutJoinCommunity = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <JoinCommunity />
      </Wrapper>
    </section>
  )
}

export default AboutJoinCommunity
