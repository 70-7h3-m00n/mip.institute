import React from 'react'
import Wrapper from '@/ui/Wrapper'
import stls from './Incomers.module.sass'
import Image from 'next/image'
import PopupTrigger from '@/ui/PopupTrigger'

const Incomers = ({ title, data }: any) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.containerBlock}>
          <div className={stls.containerBlock_title}>
            <div className={stls.containerBlock_title_text}>
              {title[0]?.children[0]?.text} <br />
              <span className={stls.coloured}>{title[1]?.children[0]?.text}</span>
            </div>
            <div className={stls.containerBlock_title_img}>
              <Image
                className={stls.containerBlock_One_fon}
                width={216}
                height={64}
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739278817/Postuplenie_Teg_4bc74d2f12.png'
                alt='каждый может'
              />
            </div>
          </div>
          <div className={stls.containerBlock_main}>
            <div className={stls.containerBlock_main_left}>
              <div className={stls.containerBlock_main_left_title}>
                {data?.text[0]?.children[0]?.text}
              </div>
              <div className={stls.containerBlock_main_left_description}>
                {data?.text[1]?.children[0]?.text}
              </div>
              <div className={stls.container_img_btn}>
                <Image
                  className={stls.containerBlock_main_left_img}
                  width={462}
                  height={316}
                  src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739277866/Postuplenie_Left_bd89a2f31b.png'
                  alt='прогресс'
                />
                <PopupTrigger btn='alpha' cta='askQuestion' />
              </div>
            </div>
            <Image
              className={stls.containerBlock_main_right}
              width={596}
              height={596}
              src={data?.img?.url}
              alt='Выпусники'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
export default Incomers
