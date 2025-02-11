import stls from './CareerCenter.module.sass'
import Wrapper from '@/ui/Wrapper'
import BtnAlpha from '@/components/btns/BtnAlpha'
import pic from './jobSearch.png'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import IconEveryoneCan from '@/components/sections/Incomers/CareerCenter/IconEveryoneCan'

type TextItemType = {
  children: Array<{ text: string }>
}

type PossibilityItemType = {
  id: number
  text: TextItemType[]
}

type Props = {
  data: PossibilityItemType
}

const CareerCenter = ({ data }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          {!isMobileAndTabletLayout && (
            <span className={stls.containerBlock_title_left}>{'{карьерный центр мип}'}</span>
          )}

          <h2 className={stls.title}>
            <span className={stls.right}>{data.text[0]?.children?.[0]?.text}</span>
            <span className={stls.fullWidth}>{data.text[1]?.children?.[0]?.text}</span>
          </h2>
        </div>

        <div className={stls.content}>
          <div className={stls.left}>
            <p className={stls.description}>{data.text[2]?.children?.[0]?.text}</p>
            <BtnAlpha text='Узнать больше' />
          </div>

          <div className={stls.images}>
            <Image
              src={pic}
              alt='Карьерный центр'
              className={stls.image}
              height={isMobileAndTabletLayout ? 200 : 300}
              style={{ width: '100%' }}
            />
            <IconEveryoneCan />
            <BtnAlpha text='Узнать больше' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default CareerCenter
