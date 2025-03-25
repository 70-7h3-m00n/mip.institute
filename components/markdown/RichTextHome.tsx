import classNames from 'classnames'

const RichTextHome = ({ data, stls, ...otherProps }) => {
  return (
    <div {...otherProps}>
      {data?.map((block, index) => {
        const className = classNames({
          [stls.heading]: block.type === 'heading',
          [stls.text]: block.type === 'paragraph'
        })
        return (
          <p key={index} className={className}>
            {block.children.map((child, i) => child.text)}
          </p>
        )
      })}
    </div>
  )
}

export default RichTextHome
