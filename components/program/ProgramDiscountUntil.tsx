import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2025, 4, 8)
            ? '7 мая'
            : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
