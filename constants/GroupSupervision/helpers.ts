import dayjs from 'dayjs'

export function generateDates(startDate: Date, endDate: Date): string[] {
  const dates: string[] = []

  while (startDate <= endDate) {
    dates.push(new Date(startDate).toISOString())
    startDate.setDate(startDate.getDate() + 7)
  }

  return dates
}

export const groupsData = [
  {
    groupName: 'Группа №1',
    dates: generateDates(new Date(2025, 1, 18), new Date(2025, 2, 11)),
    time: ['16:00 - 18:30'],
    classEventDate: 'eventDatePurple'
  },
  {
    groupName: 'Группа №2',
    dates: generateDates(new Date(2025, 1, 19), new Date(2025, 2, 12)),
    time: ['09:00 - 11:30'],
    classEventDate: 'eventDateOrange'
  },
  {
    groupName: 'Группа №3',
    dates: generateDates(new Date(2025, 1, 22), new Date(2025, 2, 15)),
    time: ['13:00 - 15:30'],
    classEventDate: 'eventDateWhite'
  }
]

export const formatDateRange = (dates: string[]): string => {
  const parsedDates = dates.map(date => dayjs(date))

  const minDate = parsedDates.reduce((min, date) => (date.isBefore(min) ? date : min))
  const maxDate = parsedDates.reduce((max, date) => (date.isAfter(max) ? date : max))

  return `${minDate.format('DD.MM')}-${maxDate.format('DD.MM.YYYY')}`
}

export const getNextClassDay = (dates: string[]): string => {
  const today = dayjs()
  const parsedDates = dates.map(date => dayjs(date))
  const nextClassDate = parsedDates.find(date => date.isAfter(today))

  return nextClassDate ? nextClassDate.format('dd').toLocaleUpperCase() : ''
}
