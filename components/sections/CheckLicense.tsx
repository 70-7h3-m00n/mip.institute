import stls from '@/styles/components/sections/CheckLicense.module.sass'
import { routes } from '@/config/index'
import Wrapper from '@/ui/Wrapper'
import BtnAlpha from '@/components/btns/BtnAlpha'
import ImgFullProgram1 from '@/components/imgs/fullprogram/ImgFullProgram1'
import IconSpiral from '../icons/IconSpiral'
import IconSmallSpiral from '../icons/IconSmallSpiral'

type Props = {
  isOchuVoMip?: boolean
}

const CheckLicense = ({ isOchuVoMip }: Props) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.icon}>
            <IconSpiral />
          </div>
          <div className={stls.smallSpiral}>
            <IconSmallSpiral />
          </div>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>

          <div>
            <div className={stls.text}>
              <p className={stls.title}>Проверьте лицензии</p>
              <p className={stls.p}>
                Вы можете проверить действующие лицензии на сайте РОСОБРНАДЗОРА
              </p>
            </div>
            <div className={stls.btn}>
              <BtnAlpha
                text='Проверить'
                href={
                  isOchuVoMip
                    ? routes.external.ochuVoMipLicense
                    : routes.external.license
                }
                target='_blank'
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CheckLicense
