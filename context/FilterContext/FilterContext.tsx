import { getUniqueCategories } from '@/helpers/funcs/getUniqueCategories'
import { createContext, useContext, useReducer } from 'react'

interface IFilter {
  bool: boolean
  input: {
    text: string
  }
  courseOpened: boolean
  isPopular: boolean
  type: ProgramTypes
  // duration: { min: number; max: number }
  sort: { field: string | null; direction: string }
}

export enum ProgramTypes {
  Professions = 'Profession',
  Courses = 'Course',
  All = ''
}

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)
const initialFilters: IFilter = {
  bool: false,
  input: { text: '' },
  courseOpened: false,
  isPopular: false,
  // duration: { min: 0, max: 6 },
  type: ProgramTypes.All,
  sort: { field: 'default', direction: 'asc' }
}

export function FilterProvider({ children, items }) {
  const [state, dispatch] = useReducer(filtersReducer, {
    filters: initialFilters,
    items: items,
    additional: { reset: false },
    categories: getUniqueCategories(items)
  })

  // useEffect(() => {
  //   if (!state.filters.category) {
  //     const filteredItems = getFilteredItems(state.items, state.filters)
  //     dispatch({
  //       type: 'updateCategories',
  //       categories: getUniqueCategories(filteredItems)
  //     })
  //   }
  // }, [state.filters])

  // useEffect(() => {
  //   getFilteredItems(items, state.filters)
  // }, [items])

  // const durations = items.map(el => el.duration)
  // const prices = items.map(el => el.price)

  // const minmaxDuration = findMinMaxForSlider(durations)
  // const minmaxPrice = findMinMaxForSlider(prices)
  // initialFilters.duration = {
  //   min: minmaxDuration.min,
  //   max: minmaxDuration.max
  // }

  return (
    <FilterContext.Provider value={state}>
      <FilterDispatchContext.Provider 
      //@ts-ignore
      value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return {
    //@ts-ignore
    filters: context?.filters,
    //@ts-ignore
    additional: context?.additional,
    //@ts-ignore
    categories: context?.categories
  }
}

export function useFilterDispatch() {
  const context = useContext(FilterDispatchContext)
  if (context === undefined) {
    throw new Error('useFilterDispatch must be used within a FilterProvider')
  }
  return context
}

export function useFilteredItems() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilteredItems must be used within a FilterProvider')
  }
  //@ts-ignore
  return getFilteredItems(context.items, context.filters)
}

function filtersReducer(state, action) {
  switch (action.type) {
    case 'setItems': {
      return {
        ...state,
        items: action.payload,
        categories: getUniqueCategories(action.payload)
      }
    }
    case 'setPriceFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          price: {
            min: action.min,
            max: action.max
          }
        }
      }
    }
    case 'setInputValue': {
      return {
        ...state,
        filters: {
          ...state.filters,
          input: {
            text: action.payload
          }
        }
      }
    }
    case 'setBooleanFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: true
        }
      }
    }
    case 'clearBooleanFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: false
        }
      }
    }
    case 'setPrograms': {
      return {
        ...state,
        filters: {
          ...state.filters,
          type: action.payload
        }
      }
    }
    case 'setDurationFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          duration: {
            min: action.min,
            max: action.max
          }
        }
      }
    }
    case 'clearFilters': {
      return {
        ...state,
        filters: initialFilters
        // bool: true
      }
    }
    case 'setBool': {
      return {
        ...state,
        additional: {
          ...state.additional,
          reset: action.payload
        }
      }
    }
    case 'sortFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: {
            field: action.payload.field,
            direction: action.payload.direction
          }
        }
      }
    }
    case 'updateCategories': {
      return {
        ...state,
        categories: action.categories
      }
    }
    case 'setCategoryFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload
        }
      }
    }
    case 'resetCategoryFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: null
        }
      }
    }
    default: {
      throw new Error('Unknown action: ' + action.type)
    }
  }
}

function getFilteredItems(items, filters) {
  let filteredItems = items.filter(item => {
    if (filters.price) {
      if (item.price < filters.price.min || item.price > filters.price.max) {
        return false
      }
    }
    if (filters.duration && item.duration) {
      if (
        item.duration < filters.duration.min ||
        item.duration > filters.duration.max
      ) {
        return false
      }
    }
    if (filters.duration && item.studyMounthsDuration) {
      if (
        item.studyMounthsDuration < filters.duration.min ||
        item.studyMounthsDuration > filters.duration.max
      ) {
        return false
      }
    }
    if (filters.type) {
      if (item.type !== filters.type) {
        return false
      }
    }
    if (filters.input.text) {
      if (
        !item.title.toLowerCase().includes(filters.input.text.toLowerCase())
      ) {
        return false
      }
    }
    if (filters.category) {
      if (item.studyField !== filters.category) {
        return false
      }
    }
    for (const key in filters) {
      if (
        typeof filters[key] === 'boolean' &&
        filters[key] === true &&
        !item[key]
      ) {
        return false
      }
    }
    return true
  })
  if (filters.sort && filters.sort.field) {
    filteredItems = filteredItems.sort((a, b) => {
      const { field, direction } = filters.sort
      const valueA = a[field] || 0
      const valueB = b[field] || 0

      if (direction === 'asc') {
        return valueA - valueB
      } else {
        return valueB - valueA
      }
    })
  }

  return filteredItems
}
