import { TypeLibReviews } from '@/types/index'

type TSortReviewsCreatedAtASCProps = {
  uniqueReviews: TypeLibReviews
}

const sortUniqueReviewsCreatedAtASC = ({ uniqueReviews }: TSortReviewsCreatedAtASCProps) => {
  return [...uniqueReviews].sort((a, b) => {
    if (!a || !b) return 0 // Если один из элементов null, не меняем порядок
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0

    return dateB - dateA
  })
}

export default sortUniqueReviewsCreatedAtASC
