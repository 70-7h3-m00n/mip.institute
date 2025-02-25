import stls from '@/styles/components/articles/ArticleBlogTable.module.sass'

type ArticleBlogTableType = {
  props: {
    row?: {
      id: number
      record?: {
        id: number
        text: string
      }[]
    }[]
  }
}

const ArticleBlogTable = ({ props }: ArticleBlogTableType) => {
  const { row } = props

  return (
    <div className={stls.container}>
      <table className={stls.table}>
        <tbody>
          {row?.map((oneColumn, i) => (
            <tr key={oneColumn.id}>
              {oneColumn?.record?.map(el =>
                i !== 0 ? (
                  <td key={el.id}>{el.text}</td>
                ) : (
                  <th key={el.id}>{el.text}</th>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArticleBlogTable
