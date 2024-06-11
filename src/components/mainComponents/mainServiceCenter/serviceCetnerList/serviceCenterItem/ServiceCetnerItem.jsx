import React from 'react'
import style from '../ServiceCetnerList.module.scss'


const ServiceCetnerItem = ({serviceItem}) => {
  return (
    <li className={style.service_center_item}>
      <a href="#/" className={style.service_link}>
        <div className={style.img_wrap}>
          <img src={require(`../../../../../assets/img/mainpage/${serviceItem.serviceImg}.png`)} alt={`${serviceItem.serviceName}`} />
        </div>
        <span className={style.service_name}>
          {serviceItem.serviceName}
        </span>
      </a>
    </li>
  )
}

export default ServiceCetnerItem