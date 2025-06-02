import getNextDiscountDate from '@/helpers/getNextDiscountDate'

const ProgramDiscountUntil = () => {
  
  return (
    <>
      до{' '}
      {new Date() < new Date(2025, 5, 1)
        ? '31 мая'
          : getNextDiscountDate(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
