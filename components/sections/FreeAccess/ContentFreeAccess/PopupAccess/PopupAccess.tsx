import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import styles from './PopupAccess.module.sass'

const PopupAccess = () => {
  const [dataStorage, setDataStorage] = useState(null)

  useEffect(() => {
    const storedLink = localStorage.getItem('accessLink')
    const storedPassword = localStorage.getItem('accessPassword')
    const storedLogin = localStorage.getItem('accessLogin')

    if (storedLogin && storedPassword && storedLogin) {
      setDataStorage({ login: storedLogin, password: storedPassword , link: storedLink })
    }
  }, [])

  return (
    <>
      {dataStorage && (
        <Popup open={true} closeOnDocumentClick={false}>
          <div className={styles.popupContainer}>
            <h3 className={styles.title}>Ваш доступ к личному кабинету</h3>
            <div className={styles.details}>
              <p>Cсылка: <a href='${dataStorage.link}'>Ссылка на личный кабинет</a></p>
              <p>Логин: {dataStorage.login}</p>
              <p>Пароль: {dataStorage.password}</p>
            </div>
            <p className={styles.infoText}>
              Сохраните данные для входа!  Напоминаем, что бесплатный доступ
              будет только 72 часа, заберите максимум пользы и почувствуйте себя
              студентом Московского Института Психологии.
            </p>
            <p className={styles.footerText}>
              Если у Вас возникли трудности с доступом, напишите обращение по
              ссылке: <a
                href='https://mipinstitute.getcourse.ru/pl/talks/conversation'
                target='_blank'>
                https://mipinstitute.getcourse.ru/pl/talks/conversation
              </a>
            </p>
          </div>
        </Popup>
      )}
    </>
  )
}

export default PopupAccess
