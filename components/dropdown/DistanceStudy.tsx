import React from 'react'
import stls from '@/styles/components/dropdownMenu/DistanceStudy.module.sass';
import classNames from 'classnames';
import PopupLogin from './PopupLogin';

interface Icon1Props {
  className?: string;
  selected?: boolean;
}

const DistanceStudy: React.FC<Icon1Props> = ({ className, selected = false }) => {
  const infoClasses = classNames(stls.container, {[stls.selected]: selected }, className);
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        {/* <PopupLogin /> */}
        <p>Вход в систему</p>
        <p>дистанционного обучения</p>
        <a className={stls.btn} href='https://lms.mip.institute/'>Войти</a>
      </div>
    </div>
  )
}

export default DistanceStudy