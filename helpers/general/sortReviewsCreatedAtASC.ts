import { TypeLibReviews } from '@/types/index'

type TSortReviewsCreatedAtASCProps = {
  reviews: TypeLibReviews
}

const sortReviewsCreatedAtASC = ({
  reviews
}: TSortReviewsCreatedAtASCProps) => {
  return [...reviews].sort((a, b) => {
    //@ts-ignore
    const dateA = new Date(a.createdAt).getTime()
    //@ts-ignore
    const dateB = new Date(b.createdAt).getTime()
    return dateB - dateA
  })
}

export default sortReviewsCreatedAtASC
