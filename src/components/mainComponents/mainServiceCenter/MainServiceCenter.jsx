import React from 'react'
import style from './MainServiceCenter.module.scss'
import ServiceCenterList from './serviceCetnerList/ServiceCenterList'


const MainServiceCenter = () => {
  return (
    <div className={style.main_service_area}>
        <div className={`${style.inner} inner`}>
          <div className={style.title_wrap}>
            <h2 className={`${style.section_title} section_title`}>
              고객센터를 통해 궁금증을 해결하세요.
            </h2>
            <a href="#/" className={style.more_link}>서비스 전체보기</a>
          </div>
            <ServiceCenterList />
        </div>
    </div>
  )
}

export default MainServiceCenter