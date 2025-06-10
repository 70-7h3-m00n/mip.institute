import BtnFields from '@/components/btns/BtnFields'
import BtnHumburger from '@/components/btns/BtnHumburger'
import BtnPhone from '@/components/btns/BtnPhone'
import Logo from '@/ui/Logo'
import MenuMobile from '@/components/sections/MenuMobile'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/Header.module.sass'
import classNames from 'classnames'
import SearchProgramsDropDown from '@/components/dropdown/SearchProgramsDropDown'
import IconsDropDown from '@/components/dropdown/IconsDropDown'

const HeaderServer = () => {
  

  return (
    <>
      <header
        className={classNames({
          [stls.container]: true,
        })}>
        <MenuMobile />
        <Wrapper>
          <div className={stls.row}>
            <Logo atHeader />
            <div className={stls.btns}>
              <BtnPhone />
              <BtnHumburger />
            </div>
            <div className={stls.btnFields}>
              <BtnFields />
            </div>
            <SearchProgramsDropDown />
            <IconsDropDown
            />
          </div>

        </Wrapper>
      </header>
    </>
  )
}

export default HeaderServer
