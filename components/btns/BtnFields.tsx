import { useContext, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext';
import Wrapper from '@/ui/Wrapper';
import IconMenu from '@/components/icons/IconMenu';
import stls from '@/styles/components/btns/BtnFields.module.sass';
import MainStudyFields from '../sections/MainStudyFields';
import StudyFieldsOnMain from '../sections/StudyFieldsOnMain';

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } = useContext(FieldsTooltipContext);
  const [currentType, setCurrentType] = useState(null)
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (btnRef.current && tooltipRef.current) {
        if (!btnRef.current.contains(event.target as Node) && !tooltipRef.current.contains(event.target as Node)) {
          closeFieldsTooltip();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeFieldsTooltip]);

  return (
    <Wrapper>
      <div id='btnFieldsContainer' className={stls.container}>
        <button
          ref={btnRef} 
          className={stls.btn}
          onClick={toggleFieldsTooltip}
        >
          <span className={stls.icon}>
            <IconMenu />
          </span>
          <span className={stls.text}>Программы обучения</span>
        </button>
        <div
          ref={tooltipRef} 
          className={classNames({
            [stls.tooltip]: true,
            [stls.isShown]: fieldsTooltipIsOpen, 
          })}
        >
          <MainStudyFields
          // @ts-ignore
            currentType={currentType}
            // @ts-ignore
            setCurrentType={setCurrentType}
          />
          <StudyFieldsOnMain
          // @ts-ignore
            currentType={currentType}
            ofType={currentType}
            orang
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default BtnFields;
