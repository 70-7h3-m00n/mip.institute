export const BtnPrev = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='20' fill='white' />
      <path
        d='M14.5 20.866C13.8333 20.4811 13.8333 19.5189 14.5 19.134L22 14.8038C22.6667 14.4189 23.5 14.9001 23.5 15.6699L23.5 24.3301C23.5 25.0999 22.6667 25.5811 22 25.1962L14.5 20.866Z'
        fill='#6F01C6'
      />
    </svg>
  )
}

export const NextBtn = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <rect
        x='40'
        y='40'
        width='40'
        height='40'
        rx='20'
        transform='rotate(-180 40 40)'
        fill='white'
      />
      <path
        d='M25.5 19.134C26.1667 19.5189 26.1667 20.4811 25.5 20.866L18 25.1962C17.3333 25.5811 16.5 25.0999 16.5 24.3301L16.5 15.6699C16.5 14.9001 17.3333 14.4189 18 14.8038L25.5 19.134Z'
        fill='#6F01C6'
      />
    </svg>
  )
}

export const images = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738653415/slide5_24ddb2aeae.jpg',
    width: 652,
    height: 350,
    alt: 'Офис'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738653030/slide3_621371ad23.jpg',
    width: 652,
    height: 350,
    alt: 'Коридор офиса'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738653159/slide4_13216e437a.jpg',
    width: 652,
    height: 350,
    alt: 'Зал конференции'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738926102/DSCF_5205_resized_krupnyj_razmer_30f670df75.jpg',
    width: 652,
    height: 350,
    alt: 'План этажей'
  }
]

export const IconBG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='364'
      height='342'
      viewBox='0 0 364 342'
      fill='none'>
      <path
        d='M208.235 377.357C266.588 427.21 393.725 328.505 450 272.92C210.941 436.326 350.392 159.06 450 0L401.177 3.39729e-06C224.706 145.866 186.471 60.7772 189.411 2.27958e-05L0 3.87291e-05C17.4118 238.647 239.804 149.827 348.824 75.5868C277.647 155.405 149.882 327.505 208.235 377.357Z'
        fill='#6F01C6'
        fillOpacity='0.03'
      />
    </svg>
  )
}
