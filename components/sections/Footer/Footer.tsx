import Wrapper from '@/ui/Wrapper'
import stls from '@/components/sections/Footer/Footer.module.sass'
import FooterDesktop from '@/components/sections/Footer/Desktop/FooterDesktop'
import Link from 'next/link'

const Footer = () => {
  // const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  // const [isEdpartners, setIsEdpartners] = useState(false)

  // const partCookie = getCookie('utm')
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const utmSource = getUtmSourceFromCookie()
  //     setIsEdpartners(utmSource === 'edpartners')
  //   }, 300)
  //   return () => clearTimeout(timer) // Очищаем таймер при размонтировании
  // }, [isEdpartners, partCookie])

  return (
    <footer className={stls.container}>
      {/* {isMobileAndTabletLayout ? (
        <FooterMobile />
      ) : ( */}
      <Link href="/about">О нас</Link>
        {/* <Wrapper>
          <FooterDesktop />
        </Wrapper> */}
      {/* )} */}
    </footer>
  )
}

export default Footer
