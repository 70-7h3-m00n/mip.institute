import { TypeLibReviews } from '@/types/index'

type TSortReviewsCreatedAtASCProps = {
  uniqueReviews: TypeLibReviews
}

const sortUniqueReviewsCreatedAtASC = ({
  uniqueReviews
}: TSortReviewsCreatedAtASCProps) => {
  return [...uniqueReviews].sort((a, b) => {
    //@ts-ignore
    const dateA = new Date(a.createdAt).getTime()
    //@ts-ignore
    const dateB = new Date(b.createdAt).getTime()
    return dateB - dateA
  })
}

export default sortUniqueReviewsCreatedAtASC