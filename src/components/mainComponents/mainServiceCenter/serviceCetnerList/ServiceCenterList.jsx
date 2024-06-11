import React, {useState, useEffect} from 'react'
import ServiceCetnerItem from './serviceCenterItem/ServiceCetnerItem'

import style from './ServiceCetnerList.module.scss'

import { v4 as uuidv4 } from 'uuid';

import { ServiceCenterText } from '../../../../store/mainServiceCenterStore/mainServiceCenter.type'

const ServiceCenterList = () => {
  const [showAll, setShowAll] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleShowAll = () => {
    setShowAll(true);
  }

  return (
    <div className={style.service_center_list_area}>
        <ul className="service_center_list">
        {ServiceCenterText.slice(0, showAll ? ServiceCenterText.length : windowWidth < 768 ? 12 : 18).map(serviceItem => <ServiceCetnerItem key={uuidv4()} serviceItem={serviceItem} />)}
        </ul>
        {!showAll && ServiceCenterText.length > (windowWidth < 768 ? 12 : 18) && (
            <button type='button' onClick={handleShowAll} className='btn_more'>
                서비스 더보기
            </button>
        )}
    </div>
  )
}

export default ServiceCenterList