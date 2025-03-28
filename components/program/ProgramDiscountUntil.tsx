import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {
      new Date() < new Date(2025,2,29)
        ? '28 марта'
        : new Date() < new Date(2025,3,1)
        ? '31 марта'
          : 
          getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
