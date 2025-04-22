'use client'
import PopupTrigger from '@/ui/PopupTrigger'
import stls from './Title.module.sass'


const SignUpButtons = () => {
  return (
    <div className={stls.btns}>
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta='signUpForProgramm' />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='beta' cta='askQuestion' />
          </div>
        </div>
  )
}

export default SignUpButtons
