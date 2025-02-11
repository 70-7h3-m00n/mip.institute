import stls from '@/styles/pages/PageIncomers.module.sass'
import ProgramSelectionTop from '@/components/sections/Incomers/ProgramSelectionTop/ProgramSelectionTop'
import OurPossibilities from '../sections/Incomers/OurPossibilities/OurPossibilities'
import MeetInstitute from '../sections/Incomers/MeetInstitute/MeetInstitute'
import HappyStudents from '../sections/HappyStudents'
import CareerCenter from '@/components/sections/Incomers/CareerCenter/CareerCenter'
import Incomers from '../sections/Incomers/Incomers/Incomers'

// type Props = {
//   incomers: Lectorium
// }

const PageIncomers = ({ incomers }: any) => {
  console.log({ incomers })
  return (
    <div className={stls.container}>
      <Incomers title={incomers.title} data={incomers.incomersInfo} />
      <MeetInstitute data={incomers.MeetInstitute} />
      <HappyStudents isMainPage={false} />
      <ProgramSelectionTop />
      <OurPossibilities data={incomers.ourPossibilities} />
      <CareerCenter data={incomers.careerCenter} />
    </div>
  )
}

export default PageIncomers
