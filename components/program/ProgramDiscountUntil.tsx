import getNextDiscountDate from '@/helpers/getNextDiscountDate'

const ProgramDiscountUntil = () => {
  return <>до {getNextDiscountDate(new Date())}</>
}

export default ProgramDiscountUntil
