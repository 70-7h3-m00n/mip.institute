import stls from '@/styles/components/imgs/diplomas/ImgDiplomaDynamic.module.sass'
import { TGeneralImg } from '@/types/index'
import cn from 'classnames'
import ImgTemplate from '@/components/imgs/ImgTemplate'
import { useCheckIfResourseExists } from '@/hooks/index'
import defaultSrc from '@/public/assets/imgs/diplomas/diploma.jpg'
import defaultSrcAlt from '@/public/assets/imgs/diplomas/diploma-alt.jpg'
import defaultSrcCertificate from '@/public/assets/imgs/diplomas/certificate.jpg'
import defaultSrcCertificateAlt from '@/public/assets/imgs/diplomas/certificate-alt.jpg'

type TImgDiplomaDynamic = TGeneralImg & {
  diplomaAlt?: boolean
  diplomaCertificate?: boolean
  diplomaCertificateAlt?: boolean
}

const ImgDiplomaDynamic = ({
  classNames,
  src,
  alt,
  width,
  height,
  diplomaAlt,
  diplomaCertificate,
  diplomaCertificateAlt
}: TImgDiplomaDynamic) => {
  const isImage = useCheckIfResourseExists({ src })

  return (
    <ImgTemplate
      classNames={[cn(stls.container, classNames)]}
      src={
        src && isImage
          ? src
          : diplomaAlt
            ? defaultSrcAlt
            : diplomaCertificate
              ? defaultSrcCertificate
              : diplomaCertificateAlt
                ? defaultSrcCertificateAlt
                : defaultSrc
      }
      alt={alt || 'Диплом'}
      width={width}
      height={height}
    />
  )
}

export default ImgDiplomaDynamic
