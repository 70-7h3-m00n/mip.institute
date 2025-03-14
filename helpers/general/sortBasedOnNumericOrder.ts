import { TypeLibPrograms, TypeLibReviews, TypeLibTeachers, TypeLibWebinars } from '@/types/index'

type TypeSortBasedOnNumericOrderProps = {
  programs?: TypeLibPrograms
  reviews?: TypeLibReviews
  teachers?: TypeLibTeachers | null
  webinars?: TypeLibWebinars
  uniqueReviews?: TypeLibReviews
  sortField?: string
  sortDirection?: string
}

const sortBasedOnNumericOrder = ({
  programs,
  reviews,
  teachers,
  webinars,
  uniqueReviews,
  sortField = 'default',
  sortDirection = 'asc'
}: TypeSortBasedOnNumericOrderProps): any => {
  const arr = programs || reviews || teachers || webinars || uniqueReviews || []

  // Сортировка по умолчанию с учетом isPopular
  if (sortField === 'default') {
    return [...arr].sort((a, b) => {
      if (!a || !b) return 0 // Если a или b = null, не меняем порядок
      const aIsPopular = 'isPopular' in a && a.isPopular === true
      const bIsPopular = 'isPopular' in b && b.isPopular === true

      // Программы с isPopular=true идут первыми
      if (aIsPopular && !bIsPopular) return -1
      if (!aIsPopular && bIsPopular) return 1

      // Если оба объекта имеют или не имеют isPopular, сортировка по index_number
      const aIdx = a?.index_number?.idx ?? Infinity
      const bIdx = b?.index_number?.idx ?? Infinity

      return Number(aIdx) - Number(bIdx)
    })
  }

  if (sortField === 'price') {
    return [...arr].sort((a, b) => {
      if (!a || !b) return 0 // Проверяем на null

      const priceA = 'price' in a && typeof a.price === 'number' ? a.price : Infinity
      const priceB = 'price' in b && typeof b.price === 'number' ? b.price : Infinity

      return sortDirection === 'asc' ? priceA - priceB : priceB - priceA
    })
  }

  return arr
}
export default sortBasedOnNumericOrder
