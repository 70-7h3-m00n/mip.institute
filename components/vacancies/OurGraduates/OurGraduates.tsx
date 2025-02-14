import React from 'react'
import stls from './OurGraduates.module.sass'
import Image from 'next/image'

type PropsType = {
  props: {
    body: string
  }
}

const linkImage = [
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579299/attractive_girl_portrait_white_shirt_1_c6c7efff26.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579264/medium_shot_woman_posing_74e7876ad9.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579224/close_up_portrait_tender_lovely_woman_with_curly_hair_nude_make_up_posing_camera_with_lovely_smile_brunette_woman_brown_shirt_feels_good_weekend_home_comfort_concept_9928b287be.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579316/image_2441_3e64fbc153.jpg'
]

const OurGraduates = ({ props }: PropsType) => {
  const parseText = (text: string) => {
    const parts = text.split(/\*\*/)
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        <span key={`text-${index}`} className={stls.normalText}>
          {part}
        </span>
      ) : (
        <span key={`highlight-${index}`} className={stls.highlightedText}>
          {part}
        </span>
      )
    )
  }

  return (
    <section className={stls.container}>
      {/*<Wrapper>*/}
      <div className={stls.container}>
        <div className={stls.imageGallery}>
          {linkImage.map((imageUrl, index) => (
            <div
              key={index}
              className={stls.imageWrapper}
              style={{ zIndex: linkImage.length - index }}>
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className={stls.image}
              />
            </div>
          ))}

          <div className={stls.imageWrapper}>
            <Image
              src={
                'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738652765/ic_round_plus_3cfa60022d.jpg'
              }
              alt={`Image ${5}`}
              width={200}
              height={200}
              className={stls.image_plus}
            />
          </div>
        </div>

        <div className={stls.topLeftSvg}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='149'
            height='123'
            viewBox='0 0 149 123'
            fill='none'>
            <g clipPath='url(#clip0_5820_1608)'>
              <path
                d='M103.267 64.1382C106.682 60.7215 111.999 58.8618 118.526 58.8618C134.692 58.8618 149 72.2257 149 90.3038C149 108.382 135.297 123 116.624 123C97.9501 123 82.6913 109.593 82.6913 82.8217C82.6913 49.52 106.336 21.7975 130.326 1.36263e-05L147.444 18.0348C121.941 33.9072 108.238 51.3365 103.224 64.1382L103.267 64.1382Z'
                fill='#F87E1B'
              />
              <path
                d='M20.5752 64.1382C23.9901 60.7215 29.3069 58.8618 35.834 58.8618C52.0005 58.8618 66.3516 72.269 66.3516 90.3038C66.3516 108.339 52.6057 123 33.9321 123C15.2584 123 -0.00034978 109.593 -0.00034744 82.8217C-0.000344528 49.52 23.6443 21.7975 47.6347 1.36225e-05L64.7522 18.0781C39.2489 33.9504 25.5462 51.3797 20.532 64.1814L20.5752 64.1382Z'
                fill='#F87E1B'
              />
            </g>
            <defs>
              <clipPath id='clip0_5820_1608'>
                <rect
                  width='149'
                  height='123'
                  fill='white'
                  transform='translate(149 123) rotate(-180)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={stls.bottomRightSvg}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='149'
            height='123'
            viewBox='0 0 149 123'
            fill='none'>
            <g clipPath='url(#clip0_5820_1611)'>
              <path
                d='M45.7331 58.8618C42.3182 62.2785 37.0015 64.1382 30.4743 64.1382C14.3078 64.1382 0 50.7743 0 32.6962C0 14.6181 13.7026 0 32.3763 0C51.0499 0 66.3087 13.4072 66.3087 40.1783C66.3087 73.4799 42.6641 101.203 18.6736 123L1.55614 104.965C27.0595 89.0928 40.7621 71.6635 45.7763 58.8618H45.7331Z'
                fill='#F87E1B'
              />
              <path
                d='M128.425 58.8618C125.01 62.2785 119.693 64.1382 113.166 64.1382C96.9995 64.1382 82.6484 50.731 82.6484 32.6962C82.6484 14.6614 96.3943 0 115.068 0C133.742 0 149 13.4072 149 40.1783C149 73.4799 125.356 101.203 101.365 123L84.2478 104.922C109.751 89.0496 123.454 71.6202 128.468 58.8186L128.425 58.8618Z'
                fill='#F87E1B'
              />
            </g>
            <defs>
              <clipPath id='clip0_5820_1611'>
                <rect width='149' height='123' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={stls.text}>{parseText(props.body)}</div>
      </div>
      {/*</Wrapper>*/}
    </section>
  )
}

export default OurGraduates
