import stls from '@/styles/components/program/ProgramCost.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'
import PopupTrigger from '../general/PopupTrigger'
import classNames from 'classnames'
import IconScrewedArrow from '../icons/IconScrewedArrow'

const ProgramCost = ({ withPerMonth = false }) => {
  const { program } = useContext(ContextStaticProps)

  const price = (program && program.price) || 0
  const discount = (program && program.discount) || discountNum

  const rprice =
    Math.round(Math.ceil((price / (100 - discount)) * 100) / 1000) * 1000

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          <div className={stls.spanLine}>
            <p className={stls.fullPrice}>
              Стоимость программы
              <span className={stls.bold}> за весь курс:</span>
            </p>
            <div className={stls.flexMonth}>
              <span className={stls.discount}>
                {toNumberWithSpaces(price)} &#8381;
              </span>
              <span className={stls.regular}>
                <span className={stls.bold}>
                  {toNumberWithSpaces(rprice)} &#8381;
                </span>
              </span>
            </div>
            <div className={stls.icon}>
              <IconScrewedArrow />
            </div>
          </div>
          <div className={stls.btns}>
            <div
              className={classNames({
                [stls.btnquestion]: true
              })}>
              <PopupTrigger btn='zeta' cta='askQuestion' />
            </div>
            <p>Записаться на курс или получить бесплатную консультацию</p>
            <div className={stls.askQuestion}>
              <PopupTrigger btn='alpha' cta='signUp' />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProgramCost
