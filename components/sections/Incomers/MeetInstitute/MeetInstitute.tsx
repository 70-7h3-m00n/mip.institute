import Wrapper from '@/ui/Wrapper'
import stls from './MeetInstitute.module.sass'

type TextItemType = {
  type: string
  children: Array<{ text: string; type: string }>
}

type PossibilityItemType = {
  id: number
  text: TextItemType[]
}

type Props = {
  data: PossibilityItemType[]
}

const MeetInstitute = ({ data }: any) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.containerBlock}>
          <div className={stls.containerBlock_title}>
            <div className={stls.containerBlock_title_left}>{'{наши показатели в цифрах}'}</div>
            <h2 className={stls.containerBlock_title_right}>Знакомство с институтом</h2>
          </div>
          <div className={stls.containerBlock_info}>
            {data.map(item => (
              <div key={item.id} className={stls.containerBlock_info_lines}>
                <div className={stls.containerBlock_info_left}>
                  {item.text[0]?.children[0]?.text}
                </div>
                <div className={stls.containerBlock_info_right}>
                  {item.text[1]?.children[0]?.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
export default MeetInstitute
