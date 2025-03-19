import NoPlannedEvents from './NoPlannedEvents/NoPlannedEvents'
import JoinCommunity from '@/components/sections/lectorium/Stub/JoinCommunity/JoinCommunity'

type StubProps = {
  onClick: () => void
}
const Stub = ({ onClick }: StubProps) => {
  return (
    <>
      <NoPlannedEvents onClick={onClick} />
      <JoinCommunity />
    </>
  )
}

export default Stub
