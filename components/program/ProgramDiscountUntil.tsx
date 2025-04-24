import getNextFriday from '@/helpers/getNextFriday'

const ProgramDiscountUntil = () => {
  return (
    <>
      до{' '}
      {new Date() < new Date(2025, 3, 26)
        ? '25 апреля'
        : new Date() < new Date(2025, 3, 29)
          ? '28 апреля'
          : new Date() < new Date(2025, 4, 1)
            ? '30 апреля'
            : getNextFriday(new Date())}
    </>
  )
}

export default ProgramDiscountUntil
