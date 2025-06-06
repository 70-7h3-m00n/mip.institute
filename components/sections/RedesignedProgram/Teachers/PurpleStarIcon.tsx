import React from 'react'

interface Props {
  width?: number | string
  height?: number | string
  fill?: string
  className?: string
}

const PurpleStarIcon: React.FC<Props> = ({
  width = 17,
  height = 17,
  fill = '#855EDF',
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    className={className}
  >
    <path
      d="M8.27316 0.201502C8.30507 -0.0671674 8.69493 -0.0671674 8.72684 0.201502L8.99427 2.4554C9.3396 5.36578 11.6342 7.6604 14.5446 8.00573L16.7985 8.27316C17.0672 8.30507 17.0672 8.69493 16.7985 8.72684L14.5446 8.99427C11.6342 9.3396 9.3396 11.6342 8.99427 14.5446L8.72684 16.7985C8.69493 17.0672 8.30507 17.0672 8.27316 16.7985L8.00573 14.5446C7.6604 11.6342 5.36578 9.3396 2.4554 8.99427L0.201502 8.72684C-0.0671674 8.69493 -0.0671674 8.30507 0.201502 8.27316L2.4554 8.00573C5.36578 7.6604 7.6604 5.36578 8.00573 2.4554L8.27316 0.201502Z"
      fill={fill}
    />
  </svg>
)

export default PurpleStarIcon
