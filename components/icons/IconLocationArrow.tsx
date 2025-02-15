import stls from '@/styles/components/icons/IconLocationArrow.module.sass'

const IconLocationArrow = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'>
        <path
          d='M17.4998 2.5L12.0831 17.5C12.0466 17.5798 11.9879 17.6474 11.914 17.6948C11.8402 17.7422 11.7542 17.7674 11.6665 17.7674C11.5787 17.7674 11.4928 17.7422 11.4189 17.6948C11.3451 17.6474 11.2864 17.5798 11.2498 17.5L8.33315 11.6667L2.49981 8.75C2.42003 8.71344 2.35242 8.65474 2.30502 8.58088C2.25762 8.50701 2.23242 8.4211 2.23242 8.33333C2.23242 8.24557 2.25762 8.15965 2.30502 8.08579C2.35242 8.01193 2.42003 7.95323 2.49981 7.91667L17.4998 2.5Z'
          stroke='#8F60FF'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconLocationArrow
