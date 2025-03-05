import React from 'react'
import styles from './Table.module.sass'

// Тип для ячейки таблицы
interface TableCell {
  content: React.ReactNode // Контент ячейки (текст, элемент JSX)
  itemProp?: string // Необязательный атрибут itemProp
  colspan?: number // Количество столбцов, на которые распространяется ячейка
  rowspan?: number // Количество строк, на которые распространяется ячейка
}

// Тип для строки таблицы
interface TableRow {
  cells: TableCell[] // Массив ячеек в строке
  itemProp?: string // Необязательный атрибут itemProp для всей строки
  isFullRow?: boolean // Флаг для строки, занимающей всю ширину таблицы
}

// Типы для таблицы
interface TableProps {
  itemPropHeader?: string
  headers?: string[] // Заголовки таблицы
  rows: TableRow[] // Массив строк таблицы
  title?: string // Заголовок таблицы
  isBudget?: boolean
  subTitle?: string
}

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  title,
  itemPropHeader,
  isBudget = false,
  subTitle
}) => {
  return (
    <table className={styles.table}>
      <thead>
        {title && (
          <tr>
            <th colSpan={headers?.length || rows[0]?.cells?.length} className={styles.title}>
              {title}
            </th>
          </tr>
        )}
        {isBudget && (
          <tr {...(itemPropHeader ? { itemProp: itemPropHeader } : {})}>
            <th></th>
            <th colSpan={rows[0]?.cells?.length - 1 || 1}>{subTitle}</th>
          </tr>
        )}
        {headers && headers?.length > 0 && (
          <tr {...(itemPropHeader ? { itemProp: itemPropHeader } : {})}>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        )}
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => {
          if (row.isFullRow) {
            // Полная строка
            return (
              <tr key={rowIndex} {...(row.itemProp ? { itemProp: row.itemProp } : {})}>
                <td className={styles.fullRow} colSpan={headers && headers.length}>
                  {row.cells[0]?.content}
                </td>
              </tr>
            )
          }

          // Обычная строка
          return (
            <tr key={rowIndex} {...(row.itemProp ? { itemProp: row.itemProp } : {})}>
              {row.cells.map((cell, cellIndex) => {
                const { content, itemProp, colspan, rowspan } = cell
                return (
                  <td
                    key={cellIndex}
                    {...(itemProp ? { itemProp } : {})}
                    {...(colspan ? { colSpan: colspan } : {})}
                    {...(rowspan ? { rowSpan: rowspan } : {})}>
                    {content}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
