import React from 'react'
import Image from 'next/image'
import stls from './ImgGallery.module.sass'

const linkImage = [
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579299/attractive_girl_portrait_white_shirt_1_c6c7efff26.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579264/medium_shot_woman_posing_74e7876ad9.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579224/close_up_portrait_tender_lovely_woman_with_curly_hair_nude_make_up_posing_camera_with_lovely_smile_brunette_woman_brown_shirt_feels_good_weekend_home_comfort_concept_9928b287be.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579316/image_2441_3e64fbc153.jpg',
  'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579299/attractive_girl_portrait_white_shirt_1_c6c7efff26.jpg'
]

const ImgGallery = () => {
  return (
    <div className={stls.imageGallery}>
      {linkImage.map((imageUrl, index) => (
        <div key={index} className={stls.imageWrapper} style={{ zIndex: linkImage.length - index }}>
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={69}
            height={69}
            className={stls.image}
          />
        </div>
      ))}
    </div>
  )
}

export default React.memo(ImgGallery)
