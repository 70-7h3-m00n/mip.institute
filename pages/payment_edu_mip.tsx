import PopupTrigger from '@/ui/PopupTrigger'
import PageTitle from '@/ui/PageTitle'
import Wrapper from '@/ui/Wrapper'
import PaymentInfo from '@/components/sections/PaymentInfo'
import PaymentDebitCard from '@/components/sections/PaymentDebitCard'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/Payment.module.sass'
import { TypePageDefaultProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Script from 'next/script'
import { useState } from 'react'

const PaymentPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Оплата | ${company.name}`,
    desc: truncate(
      'Для проведения оплаты обучения, с помощью банковской карты, ниже на этой странице необходимо нажать кнопку Оплата банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем: VISA International, Mastercard Worldwide, JCB, МИР',
      120
    ),
    canonical: `${routes.front.root}${routes.front.payment}`
  }
  const [name, setName] = useState('')
  const [dog, setDog] = useState('')

  const [email, setEmail] = useState('')

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleDogovor = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDog(e.target.value)
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={true}
        noindex={true}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <PageTitle>Оплата</PageTitle>
      <PaymentDebitCard />
      <PaymentInfo />

      <Wrapper>
        <div className={stls.helpBtn}>
          <PopupTrigger btn='delta' cta='help' />
        </div>
        <div className='contumaoney'>
          <br />
          <form
            className='yoomoney-payment-form'
            action='https://yookassa.ru/integration/simplepay/payment'
            method='post'
            acceptCharset='utf-8'>
            <div className='ym-customer-info'>
              <div className='ym-block-title'>О покупателе</div>
              <input
                required
                name='cps_email'
                className='ym-input'
                placeholder='Email'
                type='text'
                value={email}
                onChange={handleEmail}
              />

              <input
                required
                name='custName'
                className='ym-input'
                placeholder='ФИО'
                type='text'
                value={name}
                onChange={handleName}
              />

              <textarea
                required
                className='ym-textarea'
                name='orderDetails'
                placeholder='Номер договора'
                onChange={handleDogovor}
                value={dog}></textarea>
            </div>

            <div className='ym-hidden-inputs'></div>

            <input
              name='customerNumber'
              type='hidden'
              value='Оплата обучения в Московском Институте Психологии'
            />
            <div className='ym-payment-btn-block ym-align-space-between'>
              <div className='ym-input-icon-rub'>
                <input
                  name='sum'
                  placeholder='0.00'
                  className='ym-input ym-sum-input ym-required-input'
                  type='number'
                  step='any'
                />
              </div>
              <button data-text='Оплатить' className='ym-btn-pay ym-result-price'>
                <span className='ym-text-crop'>Оплатить обучение</span>{' '}
                <span className='ym-price-output'></span>
              </button>
              <svg
                className='ym-logo'
                width='114'
                height='27'
                viewBox='0 0 114 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-labelledby='logoTitle'
                role='img'>
                <path
                  d='M59.3827 7.348H55.7087L53.0599 11.9619H51.6929V2.05054H48.1897V19.9081H51.6929V15.0379H53.0599L56.4777 19.9081H60.408L55.8796 13.4145L59.3827 7.348Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M85.6996 13.2436C85.016 12.7309 84.1616 12.4746 83.3926 12.2183C83.1363 12.1328 82.88 12.0474 82.6236 11.9619C82.5382 11.9619 82.4527 11.8765 82.4527 11.8765C81.9401 11.7056 81.4274 11.5347 81.4274 11.0221C81.4274 10.7657 81.5983 10.5094 81.7692 10.2531C82.0255 10.0822 82.2819 9.99676 82.6236 9.99676C83.3072 9.91132 83.9053 10.1676 84.5034 10.5094L84.5888 10.5949L86.4686 8.45878L86.3831 8.37334C86.1268 8.20245 85.8705 7.94613 85.6141 7.86068C84.9306 7.51891 84.4179 7.34802 84.0762 7.26258C83.7344 7.17714 82.7945 7.00625 81.6838 7.26258C81.1711 7.34802 80.4021 7.51891 79.6331 8.11701C78.7787 8.80055 78.266 9.65498 78.1806 10.5949C78.1806 10.9366 78.0952 12.1328 78.7787 13.0727C79.4622 13.9271 80.573 14.3544 81.342 14.6107C81.4274 14.6107 81.4274 14.6107 81.5129 14.6961C81.5983 14.6961 81.6838 14.7816 81.8546 14.7816C83.1363 15.2088 83.4781 15.3797 83.649 15.7214C83.8198 15.9778 83.8198 16.1487 83.8198 16.1487C83.8198 16.7468 83.0508 17.0031 82.5382 17.174C81.8546 17.3449 81.0857 17.0885 80.4876 16.7468C80.0603 16.405 79.6331 15.9778 79.2913 15.5506C79.1205 15.7214 77.1553 17.6866 77.1553 17.6866L77.2407 17.7721C77.9243 18.6265 79.1205 19.7373 80.9148 20.079C81.1711 20.1645 81.5129 20.1645 81.9401 20.1645C82.0255 20.1645 82.1964 20.1645 82.2819 20.1645C83.1363 20.1645 84.4179 19.9936 85.5287 19.1392C85.8705 18.8828 86.554 18.3702 86.8958 17.3449C87.2376 16.405 87.1521 15.2942 86.554 14.3544C86.4686 13.9271 86.1268 13.5854 85.6996 13.2436Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M96.9777 13.2436C96.2941 12.7309 95.4397 12.4746 94.6707 12.2183C94.4144 12.1328 94.158 12.0474 93.9017 11.9619C93.8163 11.9619 93.7308 11.8765 93.7308 11.8765C93.2182 11.7056 92.7055 11.5347 92.7055 11.0221C92.7055 10.7657 92.8764 10.5094 93.0473 10.2531C93.3036 10.0822 93.5599 9.99676 93.9017 9.99676C94.5853 9.91132 95.1834 10.1676 95.7815 10.5094L95.8669 10.5949L97.7466 8.45878L97.6612 8.37334C97.4049 8.20245 97.1485 7.94613 96.8922 7.86068C96.2087 7.51891 95.696 7.34802 95.3542 7.26258C95.0125 7.17714 94.0726 7.00625 92.9618 7.26258C92.4492 7.34802 91.6802 7.51891 90.9112 8.11701C90.0568 8.80055 89.5441 9.65498 89.4587 10.5949C89.4587 10.9366 89.3732 12.1328 90.0568 13.0727C90.7403 13.9271 91.8511 14.3544 92.6201 14.6107C92.7055 14.6107 92.7055 14.6107 92.791 14.6961C92.8764 14.6961 92.9618 14.7816 93.1327 14.7816C94.4144 15.2088 94.7561 15.3797 94.927 15.7214C95.0979 15.9778 95.0979 16.1487 95.0979 16.1487C95.0979 16.7468 94.3289 17.0031 93.8163 17.174C93.1327 17.3449 92.3637 17.0885 91.7656 16.7468C91.3384 16.405 90.9112 15.9778 90.5694 15.5506C90.3985 15.7214 88.4333 17.6866 88.4333 17.6866L88.5188 17.7721C89.2023 18.6265 90.3985 19.7373 92.1929 20.079C92.4492 20.1645 92.791 20.1645 93.2182 20.1645C93.3036 20.1645 93.4745 20.1645 93.5599 20.1645C94.4144 20.1645 95.696 19.9936 96.8068 19.1392C97.1485 18.8828 97.8321 18.3702 98.1739 17.3449C98.5156 16.405 98.4302 15.2942 97.8321 14.3544C97.7466 13.9271 97.4049 13.5854 96.9777 13.2436Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M70.83237.34811V8.54432H70.6614C69.5507 7.519 68.3544 7.00635 67.0728 7.00635C65.3639 7.00635 63.7405 7.68989 62.6298 8.88609C61.519 10.0823 60.9209 11.7057 60.9209 13.5C60.9209 15.3798 61.519 17.0032 62.6298 18.1994C63.7405 19.3956 65.2785 20.0791 66.9874 20.0791C68.269 20.0791 69.5507 19.5665 70.6614 18.6266H70.8323V19.7374H74.4209V7.17723H70.8323V7.34811ZM71.0032 13.6709C71.0032 14.7817 70.6614 15.7215 70.0633 16.4905C69.4652 17.1741 68.6108 17.5158 67.5855 17.5158C66.6456 17.5158 65.8766 17.1741 65.1931 16.4051C64.5949 15.7215 64.2532 14.7817 64.2532 13.5855C64.2532 12.4747 64.5949 11.6203 65.1931 10.8513C65.7912 10.1677 66.6456 9.74052 67.5855 9.74052C68.6108 9.74052 69.3798 10.0823 70.0633 10.7658C70.6614 11.6203 71.0032 12.5601 71.0032 13.6709Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M110.222 7.34811V8.54432H110.051C108.94 7.519 107.744 7.00635 106.462 7.00635C104.753 7.00635 103.13 7.68989 102.019 8.88609C100.908 10.0823 100.31 11.7057 100.31 13.5C100.31 15.3798 100.908 17.0032 102.019 18.1994C103.13 19.3956 104.668 20.0791 106.377 20.0791C107.658 20.0791 108.94 19.5665 110.051 18.6266H110.222V19.7374H113.81V7.17723H110.222V7.34811ZM110.393 13.6709C110.393 14.7817 110.051 15.7215 109.453 16.4905C108.855 17.1741 108 17.5158 106.975 17.5158C106.035 17.5158 105.266 17.1741 104.582 16.4051C103.984 15.7215 103.643 14.7817 103.643 13.5855C103.643 12.4747 103.984 11.6203 104.582 10.8513C105.181 10.1677 106.035 9.74052 106.975 9.74052C108 9.74052 108.769 10.0823 109.453 10.7658C110.051 11.6203 110.393 12.5601 110.393 13.6709Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M24.4366 0C16.9176 0 10.9366 6.06646 10.9366 13.5C10.9366 21.019 17.003 27 24.4366 27C31.8701 27 37.9366 20.9335 37.9366 13.5C38.022 6.06646 31.8701 0 24.4366 0ZM24.4366 18.5411C21.7024 18.5411 19.3954 16.2342 19.3954 13.5C19.3954 10.7658 21.7024 8.45886 24.4366 8.45886C27.1708 8.45886 29.4777 10.7658 29.4777 13.5C29.4777 16.2342 27.2562 18.5411 24.4366 18.5411Z'
                  fill='black'
                  fillOpacity='0.4'></path>
                <path
                  d='M10.9367 3.93036V23.5823H6.1519L0 3.93036H10.9367Z'
                  fill='black'
                  fillOpacity='0.4'></path>
              </svg>
            </div>
            <input name='shopId' type='hidden' value='400743' />
          </form>
          <Script src='https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js'></Script>
        </div>
      </Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.payment })

export default PaymentPage
