import stls from '@/styles/pages/PageIncomers.module.sass'
import ProgramSelectionTop from '@/components/sections/Incomers/ProgramSelectionTop/ProgramSelectionTop'
import OurPossibilities from '../sections/Incomers/OurPossibilities/OurPossibilities'
import MeetInstitute from '../sections/Incomers/MeetInstitute/MeetInstitute'
import HappyStudents from '../sections/HappyStudents'

// type Props = {
//   incomers: Lectorium
// }

const PageIncomers = ({ incomers }: any) => {
  return (
    <div className={stls.container}>
      <MeetInstitute data={incomers.MeetInstitute} />
      <HappyStudents isManePage={false} />
      <ProgramSelectionTop />
      <OurPossibilities data={incomers.ourPossibilities} />
    </div>
  )
}

export default PageIncomers
