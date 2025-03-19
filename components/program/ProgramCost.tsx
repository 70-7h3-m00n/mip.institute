import stls from '@/styles/components/program/ProgramCost.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'
import PopupTrigger from '@/ui/PopupTrigger'
import classNames from 'classnames'
import IconScrewedArrow from '../icons/IconScrewedArrow'
import { useRouter } from 'next/router'

const ProgramCost = ({ withPerMonth = false }) => {
  const { program } = useContext(ContextStaticProps)
  const isProfession = program?.type === 'Profession'

  const router = useRouter()
  const isPsyCons = router.query.slug === 'psiholog-konsultant'
  const showCost = program?.studyMounthsDuration <= 5
  const price = (program && program.price) || 0
  const discount = (program && program.discount) || discountNum
  const rprice = Math.round(Math.ceil((price / (100 - discount)) * 100) / 1000) * 1000
  const perMonthPrice = Math.round(Math.round(price && +price / 12) / 100) * 100

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          {showCost ? (
            <div
              className={classNames({
                [stls.spanLine]: true,
                [stls.courseLine]: !isProfession
              })}>
              <p className={stls.price}>
                Стоимость программы
                <span className={stls.boldCourse}> за весь курс:</span>
              </p>
              <div className={stls.courseFlexMonth}>
                <span className={stls.disc}>{toNumberWithSpaces(price)} &#8381;</span>
                <span
                  className={classNames({
                    [stls.regular]: true,
                    [stls.course]: !isProfession
                  })}>
                  <span className={stls.boldCourse}>{toNumberWithSpaces(rprice)} &#8381;</span>
                </span>
              </div>
              <div className={stls.icon}>
                <IconScrewedArrow />
              </div>
            </div>
          ) : (
            <>
              <div className={stls.spanLine}>
                <p className={stls.costMonth}>
                  Обучение можно оплатить сразу или воспользоваться <b>рассрочкой*</b>
                </p>
                <span className={stls.discount}>
                  <span className={stls.bold}>{isPsyCons && 'от'} {toNumberWithSpaces(perMonthPrice)}</span>{' '}
                  
                  <span className={stls.bold}>&#8381;/мес</span>
                </span>
                <p className={stls.loan}>
                  *Беспроцентная рассрочка на 12 месяцев от банков-партнеров
                </p>
              </div>
              <div className={stls.spanLine}>
                <p className={stls.fullPrice}>Стоимость программы за весь курс:</p>
                <div className={stls.flexMonth}>
                  <span className={stls.discount}>
                    <span className={stls.full}>{isPsyCons && 'от'} {toNumberWithSpaces(price)}</span>{' '}
                    <span className={stls.fullLight}>&#8381;</span>
                  </span>{' '}
                  <span className={stls.regular}>
                  {isPsyCons && 'от'}{' '}
                    <span className={stls.bold}>{toNumberWithSpaces(rprice)}</span>{' '}
                    <span className={stls.light}>&#8381;</span>
                  </span>
                </div>
              </div>
            </>
          )}
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
