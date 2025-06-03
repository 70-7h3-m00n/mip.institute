import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import stls from './BachelorProgramCost.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'
import PopupTrigger from '@/ui/PopupTrigger'

type Props = {
  title: string | ReactNode
  tagColor?: string
  bg?: string
  crossLineColor?: string
  violetBtn?: boolean
  orangeBtn?: boolean
  fullPrice: number
  fullPriceYear: number
  priceWithDiscount: number
}

const BachelorProgramCost = ({
  fullPriceYear,
  title,
  tagColor,
  bg,
  crossLineColor,
  violetBtn = false,
  orangeBtn = false,
  fullPrice,
  priceWithDiscount
}: Props) => {
  return (
    <div className={stls.container}>
      <div style={{ background: bg }} className={stls.content}>
        <p className={stls.title}>{title}</p>
        <p style={{ color: tagColor, border: `1px solid ${tagColor}` }} className={stls.tag}>
          Можно в рассрочку (при оплате стоимости обучения от 1 года)
        </p>
        <p className={stls.fullSemesterText}>Стоимость программы при оплате за год:</p>
        <span className={stls.fullPriceSemester}>
          {fullPriceYear && <span>{toNumberWithSpaces(fullPriceYear)}</span>}
          {''}
          <span>&#8381;/год</span>
        </span>{' '}
        <p className={stls.yearDiscountText}>
          Стоимость со скидкой при оплате за весь срок обучения:
        </p>
        <div className={stls.flexMonth}>
          <span className={stls.regular}>
            <span className={stls.bold}>{toNumberWithSpaces(priceWithDiscount)}</span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>{' '}
          <span className={stls.regular}>
            <span className={stls.bold}>{toNumberWithSpaces(fullPrice)}</span>{' '}
            <span className={stls.light}>&#8381;</span>
            <span style={{ background: crossLineColor }} className={stls.line}></span>
          </span>
        </div>
        <div
          className={classNames({
            [stls.violetBtn]: violetBtn,
            [stls.orangeBtn]: orangeBtn
          })}>
          <PopupTrigger btn='alpha' cta='signUp' />
        </div>
      </div>
    </div>
  )
}

export default BachelorProgramCost
